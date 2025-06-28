import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BeamsBackground } from '../ui/beams-background';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <BeamsBackground intensity="subtle" className="fixed inset-0 -z-20" />
      <Header />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;