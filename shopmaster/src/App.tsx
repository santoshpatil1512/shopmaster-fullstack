import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const HomePage = lazy(() => import('./pages/HomePage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Suspense>
  </Router>
);


export default App;
