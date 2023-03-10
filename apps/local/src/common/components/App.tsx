import React from 'react';

import { ThemeProvider } from '../providers';
import DarkModeToggle from './DarkModeToggle';

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <DarkModeToggle />
    </ThemeProvider>
  );
};

export default App;
