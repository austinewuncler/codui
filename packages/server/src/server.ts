import fastifyHttpProxy from '@fastify/http-proxy';
import Fastify from 'fastify';

const fastify = Fastify();

interface ServerOptions {
  port: number;
}

const startServer = async ({ port }: ServerOptions): Promise<void> => {
  await fastify.register(fastifyHttpProxy, {
    upstream: 'http://localhost:5173',
    websocket: true,
  });
  await fastify.listen({ port });
};

export default startServer;
