import { AxiosResponse } from "axios";
import { Configuration, CreateCompletionResponse, OpenAIApi } from "openai";
import { APIInput } from "./schema";

function mustEnv(name: string): string {
  const v = process.env[name];
  if (v == undefined) {
    throw new Error(`${name} is a required envvar`);
  }
  return v;
}

const OPENAI_API_KEY = mustEnv("OPENAI_API_KEY");

// TODO rename all functions to camelCase (JS style)

async function complete_text(prompt: string, max_tokens: number): Completion {
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // console.log("=== PROMPT ===")
  // console.log(prompt)
  // console.log("==============")

  // type corercion because OpenAI and us use different Axios types
  return openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    max_tokens: max_tokens,
  }) as Completion; 
}

async function generate_contents(input: APIInput) {
  var background_promise = create_background(input);
  var letter_promise = create_letter(input);

  const discussion_promises = input.solutions.map((solution) => ({
    theme: solution,
    content: create_discussion_item({...input, solution }),
  }));

  const discussion = await Promise.all(
    discussion_promises.map(async ({ theme, content }) => ({
      theme,
      content: await get_response(content),
    }))
  );

  const background = await get_response(background_promise);
  const letter = await get_response(letter_promise);
  // TODO generalize to N solutions
  const summary = await get_response(
    create_summary({
      ...input,
      solution1: input.solutions[0],
      solution2: input.solutions[1],
      solution3: input.solutions[2],
    })
  );

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
  };
}

type Completion = Promise<AxiosResponse<CreateCompletionResponse, any>>

async function get_response(completion: Promise<AxiosResponse<CreateCompletionResponse, any>>): Promise<string> {
  const result = await completion;
  if (result?.data?.choices == undefined) {
    throw new Error("failed to get response from OpenAI")
  }

  let response = "";

  for (var choice of result.data.choices) {
    // TODO use of ?? is kind of a hack for the type system
    response += (choice.text?.trim() ?? " ") + " ";
  }

  return response;
}

async function create_letter({
  title,
  student,
  marker,
  term,
  company,
  project,
}: APIInput): Completion {
  var prompt = `Write a letter of transmittal from ${student.discipline} student at the University of Victoria named ${student.name} to ${marker.name} \
about a work term report titled ${title} for work term ${term.workTermNumber}. The student worked on the project ${project} at the company ${company.name}. \
Include details about the student and the project.`;

  return complete_text(prompt, 500);
}

async function create_summary({
  problem,
  solution1,
  solution2,
  solution3,
}: APIInput & {
  solution1: string;
  solution2: string;
  solution3: string;
}) {
  var prompt = `Write a summary of a report comparing the following solutions to the problem ${problem}: \
${solution1}, ${solution2}, ${solution3}. Explain the criteria used to compare them, recommend solution which should be chosen, and explain why.`;

  return complete_text(prompt, 500);
}

async function create_background({ company, problem }: APIInput) {
  var prompt = `Describe the problem of ${problem}, providing details and examples. \
Explain how the problem ${problem} impacts the company ${company.name}.`;

  return complete_text(prompt, 500);
}

async function create_discussion_item({
  problem,
  solution,
}: APIInput & { solution: string }) {
  var prompt = `Describe in detail how ${solution} can be used to solve the problem of ${problem}. \
Describe the costs and benefits of the solution, and give examples.`;

  return complete_text(prompt, 1000);
}

// import { frontend } from "./schema.ts";
// console.log(await generate_contents(frontend))

export { generate_contents };
