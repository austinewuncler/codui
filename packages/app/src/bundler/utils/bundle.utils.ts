import { build } from 'esbuild-wasm';
import invariant from 'tiny-invariant';

import { loadPlugin, resolvePlugin } from '../plugins';

export const buildBundle = async (code: string): Promise<string> => {
  const { outputFiles } = await build({
    entryPoints: ['index.jsx'],
    bundle: true,
    write: false,
    jsx: 'automatic',
    plugins: [resolvePlugin(), loadPlugin(code)],
  });
  const bundle = outputFiles?.[0]?.text;
  invariant(bundle);

  return bundle;
};
