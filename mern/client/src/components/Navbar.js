import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signup">Sign Up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login">Log In</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="passwords">Passwords</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="account">Account</a>
      </li>
    </ul>
  </div>
</nav>

)
}

export default Navbar;