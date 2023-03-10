import React, {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import { useDarkMode } from '~/common/hooks';

import themeContext, { type ThemeContext } from './theme.context';

type Props = PropsWithChildren;

const ThemeProvider = ({ children }: Props): JSX.Element => {
  const { disableDarkMode, enableDarkMode, isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    if (isDarkMode) disableDarkMode();
    else enableDarkMode();
  }, [disableDarkMode, enableDarkMode, isDarkMode]);

  const context = useMemo<ThemeContext>(
    () => ({ isDarkMode, toggleDarkMode }),
    [isDarkMode, toggleDarkMode]
  );

  return (
    <themeContext.Provider value={context}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
