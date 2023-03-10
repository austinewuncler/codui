import { createContext, useContext } from 'react';
import invariant from 'tiny-invariant';

export interface ThemeContext {
  isDarkMode: boolean;
  toggleDarkMode: VoidFunction;
}

const themeContext = createContext<ThemeContext | undefined>(undefined);

export default themeContext;

export const useTheme = (): ThemeContext => {
  const context = useContext(themeContext);

  invariant(context, 'the "useTheme" hook must be used within a ThemeContext');

  return context;
};
