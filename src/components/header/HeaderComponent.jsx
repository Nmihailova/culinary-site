import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/"><h1>Кулинарный сайт</h1></Link>
    </header>
  )
};