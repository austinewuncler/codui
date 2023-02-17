import type { ImmerReducer } from 'use-immer';

import type { BundleAction, BundleState } from '../types';

const bundleReducer: ImmerReducer<BundleState, BundleAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'BUNDLE_START':
      state.isLoading = true;
      state.error = null;
      state.content = null;
      break;
    case 'BUNDLE_FAILED':
      state.isLoading = false;
      state.error = action.payload;
      break;
    case 'BUNDLE_SUCCEEDED':
      state.isLoading = false;
      state.content = action.payload;
      break;
    default:
      break;
  }
};

export default bundleReducer;
