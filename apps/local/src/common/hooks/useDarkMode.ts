import { useLocalStorage, useMediaQuery, useUpdateEffect } from 'usehooks-ts';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

interface DarkMode {
  isDarkMode: boolean;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

const useDarkMode = (): DarkMode => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [isDarkMode, setDarkMode] = useLocalStorage(
    'is-dark-mode',
    isDarkOS ?? false
  );

  useUpdateEffect(() => {
    setDarkMode(isDarkOS);
  }, [isDarkOS]);

  return {
    isDarkMode,
    enableDarkMode: () => {
      setDarkMode(true);
    },
    disableDarkMode: () => {
      setDarkMode(false);
    },
  };
};

export default useDarkMode;
