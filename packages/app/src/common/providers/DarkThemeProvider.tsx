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

  return (
    <darkThemeContext.Provider value={context}>
      <div
        className={isDarkMode ? 'dark' : ''}
        data-color-mode={isDarkMode ? 'dark' : 'light'}
      >
        {children}
      </div>
    </darkThemeContext.Provider>
  );
};

export default DarkThemeProvider;
