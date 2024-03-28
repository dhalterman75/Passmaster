import "bootstrap/dist/css/bootstrap.css";
import React from "react";

function Login() {
  return (
    <div>
      <p style={{ "text-align": "center", "font-size": "50px", "font-family": "Lucida Console, Courier New, monospace" }}>
          Log into your account
        </p>
    <div className="container align-middle" style={{"width": "50%"}}>
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Remember this device
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
    </div>
  );
}

export default Login;
