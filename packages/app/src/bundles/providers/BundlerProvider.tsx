import { motion } from 'framer-motion';
import React, { type PropsWithChildren, useRef } from 'react';
import { useImmerReducer } from 'use-immer';
import { useEffectOnce } from 'usehooks-ts';

import { Loading } from '~/common/components';

import { bundlerReducer } from '../reducers';
import { initializeBundler } from '../utils';

const BundlerProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const hasRun = useRef(false);
  const [{ status, error }, dispatch] = useImmerReducer(bundlerReducer, {
    status: 'idle',
    error: null,
  });

  useEffectOnce(() => {
    const initBundler = async (): Promise<void> => {
      dispatch({ type: 'BUNDLER_INIT_START' });

      try {
        await initializeBundler();
        dispatch({ type: 'BUNDLER_INIT_FULFILLED' });
      } catch (error: any) {
        dispatch({
          type: 'BUNDLER_INIT_REJECTED',
          payload: error.message,
        });
      }
    };
    if (!hasRun.current && status === 'idle') {
      void initBundler();
      hasRun.current = true;
    }
  });

  return status === 'pending' ? (
    <Loading />
  ) : status === 'rejected' ? (
    <motion.div
      className="fixed inset-x-0 top-0 bg-red"
      initial={{ y: '-100%' }}
      animate={{ y: 0, transition: { type: 'tween' } }}
    >
      <div className="container mx-auto flex h-16 items-center justify-center px-4 sm:px-0">
        {error}
      </div>
    </motion.div>
  ) : (
    <div className="container mx-auto px-4 py-8 sm:px-0">{children}</div>
  );
};

export default BundlerProvider;
