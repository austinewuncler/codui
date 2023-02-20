import fastifyHttpProxy from '@fastify/http-proxy';
import fastifyStatic from '@fastify/static';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import Fastify from 'fastify';

import { cellsRouter, createCellsContext } from './trpc';

const fastify = Fastify();

interface ServerOptions {
  port: number;
  filepath: string;
  appDir: string | null;
}

const startServer = async ({
  port,
  filepath,
  appDir,
}: ServerOptions): Promise<void> => {
  if (appDir != null) await fastify.register(fastifyStatic, { root: appDir });
  else
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
