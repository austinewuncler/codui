import { useContext } from 'react';

import { type DarkThemeContext, darkThemeContext } from '../contexts';

const useDarkTheme = (): DarkThemeContext => useContext(darkThemeContext);

export default useDarkTheme;
