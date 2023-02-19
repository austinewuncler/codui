import fastifyHttpProxy from '@fastify/http-proxy';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import Fastify from 'fastify';

import { cellsRouter, createCellsContext } from './trpc';

const fastify = Fastify();

interface ServerOptions {
  port: number;
  filepath: string;
}

const startServer = async ({
  port,
  filepath,
}: ServerOptions): Promise<void> => {
  await fastify.register(fastifyHttpProxy, {
    upstream: 'http://localhost:5173',
    websocket: true,
  });
  await fastify.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: {
      router: cellsRouter,
      createContext: createCellsContext(filepath),
    },
  });
  await fastify.listen({ port });
};

export default startServer;
