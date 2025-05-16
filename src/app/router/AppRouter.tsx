import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '@pages/home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}

      {/* Маршрут для обработки несуществующих путей */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
