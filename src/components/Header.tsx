import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Fix: Use relative paths instead of aliases to resolve module errors.
import { NAV_LINKS, SOCIAL_LINKS } from '../constants/index';
import { MenuIcon, XIcon } from './Icons';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const renderNavLinks = (isMobile = false) => {
    const baseClasses = isMobile 
      ? "text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
      : "px-3 py-2 rounded-md text-lg font-semibold transition-colors";
    
    const activeClass = isMobile ? "text-primary bg-primary/10" : "text-primary";
    const inactiveClass = isMobile ? "text-text-secondary" : "text-text-primary hover:text-primary";

    return NAV_LINKS.map((link) => {
      const isAnchor = link.href.startsWith('#');
      const isActive = location.pathname === link.href;

      if (isAnchor) {
        return (
          <li key={link.name}>
            <a href={link.href} className={`${baseClasses} ${inactiveClass}`} onClick={() => isMobile && setIsMenuOpen(false)}>
              {link.name}
            </a>
          </li>
        );
      }

      return (
        <li key={link.name}>
          <Link to={link.href} className={`${baseClasses} ${isActive ? activeClass : inactiveClass}`} onClick={() => isMobile && setIsMenuOpen(false)}>
            {link.name}
          </Link>
        </li>
      );
    });
  }

  return (
    <header className="bg-surface shadow-md sticky top-0 z-50">
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="text-base font-medium">
                Escola de Conselhos Tutelares do Piauí
            </div>
            <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-accent transition-colors duration-300">
                <link.icon className="w-6 h-6" />
                </a>
            ))}
            </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-24 w-auto" src="/logo.png" alt="Logo da Escola de Conselhos Tutelares do Piauí" />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              {renderNavLinks()}
            </ul>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Abrir menu</span>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-surface">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderNavLinks(true)}
             <div className="flex items-center space-x-4 pt-4 px-3 border-t border-gray-200">
                {SOCIAL_LINKS.map((link) => (
                    <a key={link.name} href={link.href} className="text-text-secondary hover:text-primary transition-colors duration-300">
                    <link.icon className="w-6 h-6" />
                    </a>
                ))}
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};