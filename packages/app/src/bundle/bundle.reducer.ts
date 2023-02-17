import type { ImmerReducer } from 'use-immer';

import type {
  BundleAction,
  BundlerInitAction,
  BundlerState,
  BundleState,
} from './bundle.type';

export const bundleReducer: ImmerReducer<BundleState, BundleAction> = (
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

export const bundlerInitReducer: ImmerReducer<
  BundlerState,
  BundlerInitAction
> = (state, action) => {
  switch (action.type) {
    case 'BUNDLER_INIT_START':
      state.isLoading = true;
      state.error = null;
      break;
    case 'BUNDLER_INIT_FAILED':
      state.isLoading = false;
      state.error = action.payload;
      break;
    case 'BUNDLER_INIT_SUCCEEDED':
      state.isLoading = false;
      break;
    default:
      break;
  }
};
