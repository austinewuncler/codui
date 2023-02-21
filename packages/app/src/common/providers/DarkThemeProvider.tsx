import React, { type PropsWithChildren, useCallback, useMemo } from 'react';
import { useDarkMode } from 'usehooks-ts';

import { darkThemeContext } from '../contexts';

const DarkThemeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const { isDarkMode, toggle } = useDarkMode(false);
  const toggleDarkTheme = useCallback(toggle, [toggle]);
  const context = useMemo(
    () => ({ isDarkTheme: isDarkMode, toggleDarkTheme }),
    [isDarkMode, toggleDarkTheme]
  );

  if (isDarkMode) {
    document.body.classList.add('dark');
    document.body.setAttribute('data-color-mode', 'dark');
  } else {
    document.body.classList.remove('dark');
    document.body.setAttribute('data-color-mode', 'light');
  }

  return (
    <darkThemeContext.Provider value={context}>
      {children}
    </darkThemeContext.Provider>
  );
};

export default DarkThemeProvider;
