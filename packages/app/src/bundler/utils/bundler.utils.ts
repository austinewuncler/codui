import { initialize } from 'esbuild-wasm';

export const initializeBundler = async (): Promise<void> => {
  await initialize({
    wasmURL: 'https://unpkg.com/esbuild-wasm@0.17.10/esbuild.wasm',
    worker: true,
  });
};
