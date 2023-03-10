import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['**/*.test.{ts,tsx}'],
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./src/setupTests.ts', 'jest-extended/all'],
    },
  })
);
