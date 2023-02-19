import { initTRPC, TRPCError } from '@trpc/server';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { dirname } from 'path';
import { z } from 'zod';

import type createCellsContext from './cells.context';

const cellSchema = z.object({
  id: z.string().or(z.number()),
  type: z.literal('code').or(z.literal('markdown')),
  content: z.string(),
});

const { router, procedure } = initTRPC
  .context<ReturnType<typeof createCellsContext>>()
  .create();

export const cellsRouter = router({
  readCells: procedure.output(z.array(cellSchema)).query(async ({ ctx }) => {
    const { filepath } = ctx;
    try {
      return JSON.parse(await readFile(filepath, 'utf-8'));
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        await mkdir(dirname(filepath), { recursive: true });
        await writeFile(filepath, '[]', 'utf-8');

        return [];
      } else
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
          cause: error,
        });
    }
  }),
});
export type CellsRouter = typeof cellsRouter;
