import { createContext } from 'react';

import type { DarkTheme } from '../types';

const darkThemeContext = createContext<DarkTheme>({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
});

export default darkThemeContext;
