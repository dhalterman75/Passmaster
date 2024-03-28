import "bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand px-3" href="/">
        <img
          src={require('./images/passmaster_logo.png')}
          border-radius="25"
          padding-left="10px"
          width="50"
          height="50"
          class="d-inline-block align-top"
          alt=""
        />
        Passmaster
      </a>
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
          <li className="nav-item nav link px-3">
            <Link classname={"links"} to={"/"}>
              <p style={{ "font-size": "15px" }}>Home</p>
            </Link>
          </li>
          <li className="nav-item nav link px-4">
            <Link to={"/signup"}>
              <p style={{ "font-size": "15px" }}>Sign Up</p>
            </Link>
          </li>
          <li className="nav-item nav link px-4">
            <Link to={"/login"}>
              <p style={{ "font-size": "15px" }}>Log In</p>
            </Link>
          </li>
          <li className="nav-item nav link px-4">
            <Link to={"/passwords"}>
              <p style={{ "font-size": "15px" }}>Passwords</p>
            </Link>
          </li>
          <li className="nav-item nav link px-4">
            <Link to={"/account"}>
              <p className={"link"} style={{ "font-size": "15px" }}>
                Account
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
