import { Configuration, OpenAIApi } from "openai";

function mustEnv(name) {
    const v = process.env[name]
    if (v == undefined) {
        throw new Error(`${name} is a required envvar`)
    }
    return v
}

const OPENAI_API_KEY = mustEnv("OPENAI_API_KEY")

// TODO rename all functions to camelCase (JS style)

async function complete_text(prompt, max_tokens) {
    const configuration = new Configuration({
        apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // console.log("=== PROMPT ===")
    // console.log(prompt)
    // console.log("==============")

    return openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        max_tokens: max_tokens,
    });
}

async function generate_contents({
    title,
    student,
    marker,
    term,
    year,
    discipline,
    company,
    project,
    problem,
    solutions
}) {
    var background_promise = create_background({ company, problem })
    var letter_promise = create_letter({
        title,
        student,
        marker,
        term,
        year,
        discipline,
        company,
        project,
    })

    const discussion_promises = solutions.map((solution) => ({
        theme: solution,
        content: create_discussion_item({problem, solution}),
    }))

    const discussion = await Promise.all(discussion_promises.map(async ({theme, content}) => ({
        theme,
        content: await get_response(content)
    })))

    const background = await get_response(background_promise)
    const letter = await get_response(letter_promise)
    // TODO generalize to N solutions
    const summary = await get_response(create_summary({
        problem,
        solution1: solutions[0],
        solution2: solutions[1],
        solution3: solutions[2],
    }))

    // TODO intro
    // TODO discussion intro
    // TODO conclusion
    // TODO recommendation
    return {
        letter,
        summary,
        introduction: "TODO GPT-3",
        background,
        discussion,
        discussionIntro: "TODO GPT-3",
        conclusion: "TODO GPT-3",
        recommendation: "TODO GPT-3",
    }
}

async function get_response(completion) {
    const result = await completion

    let response = ""

    for (var choice of result.data.choices) {
        response += choice.text.trim() + ' '
    }

    return response
}

async function create_letter({
    title,
    student,
    marker,
    term,
    company,
    project
}) {
    var prompt = `Write a letter of transmittal from ${student.discipline} student at the University of Victoria named ${student.name} to ${marker.name} \
about a work term report titled ${title} for work term ${term.workTermNumber}. The student worked on the project ${project} at the company ${company.name}. \
Include details about the student and the project.`

    return complete_text(prompt, 500)
}

async function create_summary({
    problem,
    solution1,
    solution2,
    solution3
}) {
    var prompt = `Write a summary of a report comparing the following solutions to the problem ${problem}: \
${solution1}, ${solution2}, ${solution3}. Explain the criteria used to compare them, recommend solution which should be chosen, and explain why.`

    return complete_text(prompt, 500)
}

async function create_background({ company, problem }) {
    var prompt = `Describe the problem of ${problem}, providing details and examples. \
Explain how the problem ${problem} impacts the company ${company.name}.`

    return complete_text(prompt, 500)
}

async function create_discussion_item({ problem, solution }) {
    var prompt = `Describe in detail how ${solution} can be used to solve the problem of ${problem}. \
Describe the costs and benefits of the solution, and give examples.`

    return complete_text(prompt, 1000)
}


// import { frontend } from "./schema.js";
// console.log(await generate_contents(frontend))

export {
    generate_contents
}