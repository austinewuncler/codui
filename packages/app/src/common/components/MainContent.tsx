import { motion } from 'framer-motion';
import React from 'react';
import { useImmerReducer } from 'use-immer';

import { bundlerInitReducer } from '~/bundle/bundle.reducer';
import { initializeBundler } from '~/bundle/bundle.utils';
import { Cells } from '~/cells/components';

import { useRunOnce } from '../hooks';
import Loading from './Loading';

const MainContent = (): JSX.Element => {
  const [{ status, error }, dispatch] = useImmerReducer(bundlerInitReducer, {
    status: 'idle',
    error: null,
  });

  useRunOnce(() => {
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
    if (status === 'idle') void initBundler();
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
    <div className="container mx-auto px-4 py-8 sm:px-0">
      <Cells />
    </div>
  );
};

export default MainContent;
