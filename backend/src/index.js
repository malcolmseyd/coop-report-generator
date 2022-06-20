import Fastify from "fastify";
import Handlebars from "handlebars";
import axios from "axios";
const fastify = Fastify({
  logger: true,
});
import fs from "fs/promises";
import cors from "@fastify/cors";

import files from "@fastify/static"
import { env } from "process"

import { genPDF } from "./pdfgen.js";
import { template } from "./schema.js";
import { generate_contents } from "./ai.js"

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});
fastify.get("/kanye", async (request, reply) => {
  const resp = await axios.get("https://api.kanye.rest/");
  return resp.data;
});
fastify.post("/echo", async (request, reply) => {
  return request.body;
});
fastify.post("/template", async (request, reply) => {
  const t = Handlebars.compile("The time is {{time}}");
  return { result: t({ time: new Date().toISOString() }) };
});
fastify.get("/hosts", async (request, reply) => {
  const a = await fs.readFile("/etc/hosts");
  return a.toString();
});
fastify.post("/gen", async (request, reply) => {
  const templateParams = {
    ai: await generate_contents(request.body),
    ...request.body
  }
  const url = genPDF(templateParams);
  return { url };
});
fastify.post("/ai", async (request, reply) => {
  return generate_contents(request.body)
})
fastify.post("/gen-test", async (request, reply) => {
  const url = genPDF(template);
  return { url };
})

fastify.register(files, {
  root: env.PUBLICDIR,
  prefix: '/public/',
})

fastify.register(cors, { origin: true });

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen(8080, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
