import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.tsx';
import About from './pages/About.tsx';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}