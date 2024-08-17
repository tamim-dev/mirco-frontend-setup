import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import Dev from './dev';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Dev />
  </React.StrictMode>,
);
