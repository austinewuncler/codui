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
