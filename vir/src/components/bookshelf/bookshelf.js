import React, { useState, useEffect, useRef } from 'react';
import './bookshelf.css';
import accountCircle from './account_circle.png';
import arrow from './arrow.png';
import SideMenu from '../side_menu/side_menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleBackClick = () => {
    window.history.back();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <img 
        src={arrow} 
        alt="Voltar" 
        className="back-icon"
        onClick={handleBackClick}
      />
      <h1 className="header-title">MEUS LIVROS</h1>
      <img 
        src={accountCircle} 
        className="profile-icon" 
        onClick={toggleMenu}
        alt="Ícone de perfil" 
      />
      
      {isMenuOpen && <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} menuRef={menuRef} />}
    </header>
  );
};

export default Header;