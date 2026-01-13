import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.scss';

import App from './app';

const root = createRoot(document.getElementById('main'));
root.render(<App />);