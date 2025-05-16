import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '@pages/home';
import { Portfolio } from '@pages/portfolio';
import { Services } from '@pages/services';
import { Contacts } from '@pages/contacts';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contacts" element={<Contacts />} />

      {/* Маршрут для обработки несуществующих путей */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
