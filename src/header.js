import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
  const listMenu = ['About', 'Education', 'Experience', 'Contact'];
  return (
    <div className="header">
      <h1>Curriculum Vitae</h1>
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
    </div>
  );
};
export default Header;
