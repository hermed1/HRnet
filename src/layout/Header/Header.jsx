import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <h1 className="header__title">HRnet</h1>
        </NavLink>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/" className="header__nav-link" activeClassName="header__nav-link--active" exact>
                Create Employee
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/employees" className="header__nav-link" activeClassName="header__nav-link--active">
                View Current Employees
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;