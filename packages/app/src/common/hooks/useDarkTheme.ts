import { useContext } from 'react';

import { darkThemeContext } from '../contexts';
import type { DarkTheme } from '../types';

const useDarkTheme = (): DarkTheme => useContext(darkThemeContext);

export default useDarkTheme;
