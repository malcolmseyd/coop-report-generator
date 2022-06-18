const { Configuration, OpenAIApi } = require("openai");

async function complete_text(prompt, max_tokens) {
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    return openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        max_tokens: max_tokens,
    });

}

async function generate_contents({
    report_title,
    student_name,
    coordinator,
    work_term,
    year,
    discipline,
    employer,
    project,
    problem,
    solutions
}) {
    var background_promise = create_background({employer, problem})
    var letter_promise = create_letter({
        report_title,
        student_name,
        coordinator,
        work_term,
        year,
        discipline,
        employer,
        project
    })

    var discussion_promises = []
    for (solution in solutions) {
        discussion_promises.push(
            create_discussion_item(problem, solution)
        )
    }

    const background = await get_response(background_promise)
    const letter = await get_response(letter_promise)
    var discussion_items = []
    for (promise in discussion_promises) {
        discussion_items.push(
            get_response(promise)
        )
    }



}

async function get_response(completion) {
    const result = await completion

    response = ""

    for (var choice of result.data.choices) {
            response += choice.text.trim() + ' '
    }

    return response
}

async function create_letter({
    report_title,
    student_name,
    coordinator,
    work_term,
    year,
    discipline,
    employer,
    project
}) {
    var prompt = `Write a letter of transmittal from a year ${year} ${discipline} student at the University of Victoria named ${student_name} to ${coordinator} \
about a work term report titled ${report_title} for work term ${work_term}. The student worked on the project ${project} at the company ${employer}. \
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

async function create_background({employer, problem}) {
    var prompt = `Describe the problem of ${problem}, providing details and examples. \
Explain how the problem ${problem} impacts the company ${employer}.`
    
    return complete_text(prompt, 500)
}

async function create_discussion_item({problem, solution}) {
    var prompt = `Describe in detail how ${solution} can be used to solve the problem of ${problem}. \
Describe the costs and benefits of the solution, and give examples.`

    return complete_text(prompt, 1000)
}

const test1 = async () => {
    try {
        generate_contents({
            report_title: "Solving Technical debt efficiently",
            student_name: "Kyle Stang",
            coordinator: "Mr. Smith",
            work_term: "2",
            year: "4",
            discipline: "Software Engineering",
            employer: "Tesla",
            project: "technical debt solutions",
            problem: "technical debt",
            solutions: [
                "refactoring", "code smell review", "rewriting code"
            ]
        })
    } catch(err) {

    }
}
