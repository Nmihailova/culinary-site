import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
export const Header = () => {
  return (
    <header className="header">
      <Link className="header__text" to="/"><h1 >Кулинарный сайт</h1></Link>
    </header>
  )
};