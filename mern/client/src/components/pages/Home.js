import React from "react";

const HomePage = () => {
  return (
    <div>
      <header></header>
      <main>
        <div>
        <p style={{ "text-align": "center", "font-size": "50px", "font-family": "Lucida Console, Courier New, monospace"}}>
          Welcome to EZvault, your all-in-one password storage solution!
        </p>
        </div>

        <div className="image-container">
        <img
          src={require("../images/passmaster_logo.png")}
          style={{ "border-radius": "5%", "text-align": "center" }}
          width="500"
          height="500"
          position="absolute"
          left="50%"
          alt=""
        ></img>
        </div>

        <div className="container justify-content-center">
        <p style={{ "font-size": "20px", "font-family": "Lucida Console, Courier New, monospace" }}>
          We were founded on the idea that you can't put a price on privacy.
          That's why at EZvault we believe that everyone should be able to
          store their passwords safely, securely, and most importantly for free.
        </p>
        </div>

      </main>
    </div>
  );
};

export default HomePage;
