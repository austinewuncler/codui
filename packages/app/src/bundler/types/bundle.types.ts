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
