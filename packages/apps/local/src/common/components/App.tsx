import React from 'react';

import { StoreProvider } from '../providers';
import Logo from './Logo';

const App = (): JSX.Element => (
  <StoreProvider>
    <header className="sticky inset-x-0 top-0 bg-white">
      <div className="container mx-auto flex h-16 items-center">
        <Logo />
      </div>
    </header>
  </StoreProvider>
);

export default App;
