import cors from '@fastify/cors'
import Fastify from 'fastify'

import loginRoutes from './routes/loginRoutes'
import postRoutes from './routes/postRoutes'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
    // só permite requisições vindas do site abaixo, qualquer outra deve ser ignorada
    // origin: 'https://stephhoel.github.io/lista-de-compras/',
  })

  await fastify.register(postRoutes)
  await fastify.register(loginRoutes)
  await fastify.register(loginRoutes)

  await fastify.listen({
    port: 3333,
    host: '0.0.0.0',
  })
}

bootstrap()
