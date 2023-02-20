import { motion } from 'framer-motion';
import React from 'react';
import { useImmerReducer } from 'use-immer';

import { bundlerReducer } from '~/bundler/reducers';
import { initializeBundler } from '~/bundler/utils';
import { Cells } from '~/cells/components';
import { onInitializeCells } from '~/cells/reducers';
import { Loading } from '~/common/components';

import { useOnceEffect, useTypedDispatch } from '../hooks';

const MainContent = (): JSX.Element => {
  const [{ status, error }, dispatch] = useImmerReducer(bundlerReducer, {
    status: 'idle',
    error: null,
  });
  const storeDispatch = useTypedDispatch();

  useOnceEffect(() => {
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
    if (status === 'idle') {
      void initBundler();
      void storeDispatch(onInitializeCells(null));
    }
  });

  return (
    <main className="h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-secondary-light scrollbar-thumb-rounded-full dark:scrollbar-thumb-secondary-dark">
      {status === 'pending' ? (
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
        <div className="container mx-auto px-4 py-4 sm:px-0">
          <Cells />
        </div>
      )}
    </main>
  );
};

export default MainContent;
