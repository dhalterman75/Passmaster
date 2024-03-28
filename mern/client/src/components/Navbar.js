import "bootstrap/dist/css/bootstrap.css";

import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link to={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/signup"}>
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"}>
              Log In
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/passwords"}>
              Passwords
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/account"}>
              Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
