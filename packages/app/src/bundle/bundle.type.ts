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
  isLoading: boolean;
  error: string | null;
}
export interface BundlerInitStartAction {
  type: 'BUNDLER_INIT_START';
}
export interface BundlerInitFailedAction {
  type: 'BUNDLER_INIT_FAILED';
  payload: string;
}
export interface BundlerInitSucceededAction {
  type: 'BUNDLER_INIT_SUCCEEDED';
}
export type BundlerInitAction =
  | BundlerInitStartAction
  | BundlerInitFailedAction
  | BundlerInitSucceededAction;
