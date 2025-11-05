import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AboutUsPage } from './pages/AboutUsPage';
import { GalleryDetailPage } from './pages/GalleryDetailPage';
import { GalleryListPage } from './pages/GalleryListPage';
import { HomePage } from './pages/HomePage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { NewsListPage } from './pages/NewsListPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre-nos" element={<AboutUsPage />} />
        <Route path="noticias" element={<NewsListPage />} />
        <Route path="noticias/:slug" element={<NewsDetailPage />} />
        <Route path="galeria" element={<GalleryListPage />} />
        <Route path="galeria/:slug" element={<GalleryDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;