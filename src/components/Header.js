import React from "react";
import logo from "../Assets/catty-loom-high-resolution-logo-transparent (3).png";

function Header({ favoritesOnly, setFavoritesOnly }) {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Catty Loom Logo"
              className="brand-logo"
            />
          </a>
          <div className="form-check form-switch">
            <input
              className="form-check-input toggle-switch"
              type="checkbox"
              checked={favoritesOnly}
              onChange={(e) => setFavoritesOnly(e.target.checked)}
            />
            <label className="form-check-label">Favorites Only</label>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
