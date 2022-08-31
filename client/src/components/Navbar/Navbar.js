/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar({ authState, setAuthState }) {
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/auth/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse container" id="navbarTogglerDemo01">
        <NavLink to="/" className="navbar-brand">Какой-то сайт</NavLink>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active"><NavLink to="/" className="nav-link">Главная</NavLink></li>
          {authState
            ? (
              <>
                <li className="nav-item active"><p className="nav-link">{`Привет, ${authState.name}`}</p></li>
                <li className="nav-item active"><button type="button" id="exit" onClick={logoutHandler} className="nav-link">Выход</button></li>
              </>
            )
            : (
              <>
                <li className="nav-item active"><NavLink to="/registration" className="nav-link">Регистрация</NavLink></li>
                <li className="nav-item active"><NavLink to="/login" className="nav-link">Вход</NavLink></li>
              </>
            )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

