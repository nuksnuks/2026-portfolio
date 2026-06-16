import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';
import App from './App.tsx';
import AnimatedBackground from './components/AnimatedBackground.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {
        <AnimatedBackground />
      }
      <App />
    </BrowserRouter>
  </StrictMode>
);