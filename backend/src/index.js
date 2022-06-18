import Fastify from 'fastify'
import Handlebars from 'handlebars'
import axios from "axios"
const fastify = Fastify({
	logger: true
})
import fs from "fs"

fastify.get('/', async (request, reply) => {
	return { hello: 'world' }
})

fastify.get("/kanye", async (request, reply) => {
	const resp = await axios.get("https://api.kanye.rest/")
	return resp.data
})

fastify.post("/echo", async (request, reply) => {
	return request.body
})


fastify.post("/template", async (request, reply) => {
	const t = Handlebars.compile("The time is {{time}}")
	return { result: t({ time: new Date().toISOString() }) }
})

/**
 * Run the server!
 */
const start = async () => {
	try {
		await fastify.listen({ port: 3000 })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()