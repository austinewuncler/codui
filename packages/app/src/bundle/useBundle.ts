import type { EntityId } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import { useDebounce } from 'usehooks-ts';

import useCode from '~/cells/useCode';

import { bundleReducer } from './bundle.reducer';
import type { BundleState } from './bundle.type';
import { buildBundle } from './bundle.utils';

const useBundle = (cellId: EntityId): BundleState => {
  const [bundle, dispatch] = useImmerReducer(bundleReducer, {
    isLoading: false,
    error: null,
    content: null,
  });
  const code = useCode(cellId);
  const debouncedCode = useDebounce(code, 1000);

  useEffect(() => {
    const createBundle = async (): Promise<void> => {
      dispatch({ type: 'BUNDLE_START' });
      try {
        const bundle = await buildBundle(debouncedCode);
        dispatch({ type: 'BUNDLE_SUCCEEDED', payload: bundle });
      } catch (error: any) {
        dispatch({ type: 'BUNDLE_FAILED', payload: error.message });
      }
    };
    void createBundle();
  }, [debouncedCode, dispatch]);

  return bundle;
};

export default useBundle;
