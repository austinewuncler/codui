import { build, initialize } from 'esbuild-wasm';
import invariant from 'tiny-invariant';

import { loadPlugin, resolvePlugin } from './plugins';

export const initializeBundler = async (): Promise<void> => {
  await initialize({
    wasmURL: 'https://unpkg.com/esbuild-wasm@0.17.8/esbuild.wasm',
    worker: true,
  });
};

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
