import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { ContactSection } from '../components/ContactSection';

export const MainLayout = () => {
  const location = useLocation();

  // Garante que a página role para o topo ao mudar de rota
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ContactSection />
    </>
  );
};