import React from "react";

const HomePage = () => {
  return (
    <div>
      <header></header>
      <main>
        <div>
        <p style={{ "text-align": "center", "font-size": "50px", "font-family": "Lucida Console, Courier New, monospace"}}>
          Welcome to Passmaster, your all-in-one password storage solution!
        </p>
        </div>

        <div className="container justify-content-center">
        <img
          src={require("../images/home_image.jpg")}
          style={{ "border-radius": "5%" }}
          alt=""
        ></img>
        </div>

        <div className="container justify-content-center">
        <p style={{ "text-align": "center", "font-size": "20px", "font-family": "Lucida Console, Courier New, monospace", width: "80%"}}>
          We were founded on the idea that you can't put a price on privacy.
          That's why at Passmaster we believe that everyone should be able to
          store their passwords safely, securely, and most importantly for free.
        </p>
        </div>

      </main>
    </div>
  );
};

export default HomePage;
