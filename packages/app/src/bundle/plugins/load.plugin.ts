import type { OnLoadResult, Plugin } from 'esbuild-wasm';
import localForage from 'localforage';

const modulesCache = localForage.createInstance({ name: 'modules' });

const loadPlugin = (inputCode: string): Plugin => {
  return {
    name: 'load',
    setup({ onLoad }) {
      onLoad({ filter: /(^index\.jsx$)/ }, () => ({
        loader: 'jsx',
        contents: inputCode,
      }));

      onLoad({ filter: /.*/ }, async ({ path }) => {
        const cachedModule = await modulesCache.getItem<OnLoadResult>(path);

        return cachedModule;
      });

      onLoad({ filter: /.css$/ }, async ({ path }) => {
        const res = await fetch(path);
        const text = await res.text();
        const escaped = text
          .replace(/\n/g, '')
          .replace(/"/g, '\\"')
          .replace(/'/g, "\\'");
        const contents = `
          const style = document.createElement('style');
          style.innerText = '${escaped}';
          document.head.appendChild(style);
        `;
        const result: OnLoadResult = {
          loader: 'jsx',
          contents,
          resolveDir: new URL('./', res.url).pathname,
        };
        await modulesCache.setItem(path, result);

        return result;
      });

      onLoad({ filter: /.*/ }, async ({ path }) => {
        const res = await fetch(path);
        const text = await res.text();
        const result: OnLoadResult = {
          loader: 'jsx',
          contents: text,
          resolveDir: new URL('./', res.url).pathname,
        };
        await modulesCache.setItem(path, result);

        return result;
      });
    },
  };
};

export default loadPlugin;
