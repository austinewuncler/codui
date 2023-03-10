import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
