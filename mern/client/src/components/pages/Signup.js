import "bootstrap/dist/css/bootstrap.css";
import React from "react";

function Signup() {
  return (
    <div>
      <p style={{ "text-align": "center", "font-size": "50px", "font-family": "Lucida Console, Courier New, monospace" }}>
        Create an account
      </p>
      <div
        className="container justtify-content-center"
        style={{ width: "50%" }}
      >
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
          <div className="form-group" style={{marginBottom: "10px"}}>
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
