import Fastify from "fastify";
import cors from "@fastify/cors";

import { env } from "process"

import { genPDF } from "./pdfgen.js";
import { APIInput, template } from "./schema.js";
import { generate_contents } from "./ai.js"

const fastify = Fastify({
  logger: true,
});

// // these are for testing only
// fastify.post("/ai", async (request, reply) => {
//   return generate_contents(request.body as APIInput)
// })
// fastify.post("/gen-test", async (request, reply) => {
//   const url = genPDF(template);
//   return { url };
// })

// TODO delete every other endpoint 
fastify.post("/gen", async (request, reply) => {
  const body: APIInput = request.body as APIInput // TODO validate
  const templateParams = {
    ai: await generate_contents(body),
    ...body
  }
  const url = genPDF(templateParams);
  return { url };
});

// weird type error necessitates type coercion, what the heck fastify
fastify.register(import("@fastify/static") as any, {
  root: env.PUBLICDIR,
  prefix: '/public/',
})

fastify.register(cors, { origin: true })

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ host: "0.0.0.0", port: 8080 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
