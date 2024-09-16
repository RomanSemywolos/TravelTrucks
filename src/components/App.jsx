import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

// Lazily loaded page components
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('../pages/DetailsPage/DetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      {/* Suspense fallback is displayed while the lazy-loaded components are being fetched */}
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Main route layout */}
          <Route path="/" element={<Layout />}>
            {/* Default route */}
            <Route index element={<HomePage />} />
            {/* Catalog page route */}
            <Route path="/catalog" element={<CatalogPage />} />
            {/* Details page route with dynamic ID */}
            <Route path="/catalog/:id" element={<Navigate to="features" replace />} />
            <Route path="/catalog/:id/*" element={<DetailsPage />} />
            {/* 404 Not Found page route */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
