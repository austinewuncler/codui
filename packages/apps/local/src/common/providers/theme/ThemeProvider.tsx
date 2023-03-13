import React, { type PropsWithChildren, useCallback, useMemo } from 'react';
import { useDarkMode } from 'usehooks-ts';

import themeContext, { type ThemeContext } from './theme.context';

type Props = PropsWithChildren;

const ThemeProvider = ({ children }: Props): JSX.Element => {
  const { isDarkMode, toggle } = useDarkMode();

  const toggleDarkMode = useCallback(toggle, [toggle]);

  const context = useMemo<ThemeContext>(
    () => ({
      isDarkMode,
      toggleDarkMode,
    }),
    [isDarkMode, toggleDarkMode]
  );

  return (
    <themeContext.Provider value={context}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
