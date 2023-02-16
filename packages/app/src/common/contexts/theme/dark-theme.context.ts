import { createContext } from 'react';

import type { DarkThemeContext } from './theme.types';

const darkThemeContext = createContext<DarkThemeContext>({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
});

export default darkThemeContext;
