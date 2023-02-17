import { useRef } from 'react';
import { useEffectOnce } from 'usehooks-ts';

const useRunOnce = (callback: VoidFunction): void => {
  const hasRun = useRef(false);

  useEffectOnce(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      callback();
    }
  });
};

export default useRunOnce;
