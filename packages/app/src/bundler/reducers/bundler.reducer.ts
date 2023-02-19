import type { ImmerReducer } from 'use-immer';

import type { BundlerInitAction, BundlerState } from '../types';

const bundlerReducer: ImmerReducer<BundlerState, BundlerInitAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'BUNDLER_INIT_START':
      state.status = 'pending';
      break;
    case 'BUNDLER_INIT_REJECTED':
      state.status = 'rejected';
      state.error = action.payload;
      break;
    case 'BUNDLER_INIT_FULFILLED':
      state.status = 'fulfilled';
      state.error = null;
      break;
    default:
      break;
  }
};

export default bundlerReducer;
