import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../Home';
import CarDetail from '../car-detail/CarDetail';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CarDetail />} path="/car/:id" />
        <Route path="*" element={<div> Not found </div>} />
      </Routes>
    </BrowserRouter>
  );
};
