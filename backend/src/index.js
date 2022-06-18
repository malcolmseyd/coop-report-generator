import Fastify from 'fastify'
import axios from "axios"
const fastify = Fastify({
	logger: true
})

fastify.get('/', async (request, reply) => {
	return { hello: 'world' }
})

fastify.get("/kanye", async (request, reply) => {
	const resp = await axios.get("https://api.kanye.rest/")
	return resp.data
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