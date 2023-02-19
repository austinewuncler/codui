import type { CellsRouter } from '@codui/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export const { readCells } = createTRPCProxyClient<CellsRouter>({
  links: [
    httpBatchLink({
      url: `http://localhost:${import.meta.env.PROD ? 4000 : 3000}/trpc`,
    }),
  ],
});
