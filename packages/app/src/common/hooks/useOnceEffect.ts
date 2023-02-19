import { useEffectOnce } from 'usehooks-ts';

import type { EffectOnceHook } from '../types';

const record = new WeakSet();
const createOnceEffect: (hook: EffectOnceHook) => EffectOnceHook =
  (hook) => (effect) => {
    const onceWrapper = (): void => {
      const shouldStart = !record.has(effect);

      if (shouldStart) {
        record.add(effect);
        effect();
      }
    };

    hook(() => {
      onceWrapper();
    });
  };

export default createOnceEffect(useEffectOnce);
