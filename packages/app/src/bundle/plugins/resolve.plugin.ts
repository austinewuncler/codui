import type { Plugin } from 'esbuild-wasm';

const resolvePlugin = (): Plugin => {
  return {
    name: 'resolve',
    setup({ onResolve }) {
      onResolve({ filter: /(^index\.jsx$)/ }, ({ path }) => ({
        path,
        namespace: 'a',
      }));

      onResolve({ filter: /^\.+\// }, ({ path, resolveDir }) => ({
        namespace: 'a',
        path: new URL(path, `https://unpkg.com${resolveDir}/`).href,
      }));

      onResolve({ filter: /.*/ }, async ({ path }) => ({
        namespace: 'a',
        path: `https://unpkg.com/${path}`,
      }));
    },
  };
};

export default resolvePlugin;
