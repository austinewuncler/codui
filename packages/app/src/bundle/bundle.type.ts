export interface BundleState {
  isLoading: boolean;
  error: string | null;
  content: string | null;
}
export interface BundleStartAction {
  type: 'BUNDLE_START';
}
export interface BundleFailedAction {
  type: 'BUNDLE_FAILED';
  payload: string;
}
export interface BundleSucceededAction {
  type: 'BUNDLE_SUCCEEDED';
  payload: string;
}
export type BundleAction =
  | BundleStartAction
  | BundleFailedAction
  | BundleSucceededAction;
export interface BundlerState {
  status: 'idle' | 'pending' | 'rejected' | 'fulfilled';
  error: string | null;
}
export interface BundlerInitStartAction {
  type: 'BUNDLER_INIT_START';
}
export interface BundlerInitRejectedAction {
  type: 'BUNDLER_INIT_REJECTED';
  payload: string;
}
export interface BundlerInitFulfilledAction {
  type: 'BUNDLER_INIT_FULFILLED';
}
export type BundlerInitAction =
  | BundlerInitStartAction
  | BundlerInitRejectedAction
  | BundlerInitFulfilledAction;
