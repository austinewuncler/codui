import { useDispatch } from 'react-redux';

import type { TypedDispatch } from '../store';

const useTypedDispatch: () => TypedDispatch = useDispatch;

export default useTypedDispatch;
