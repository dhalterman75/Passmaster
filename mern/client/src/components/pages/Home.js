import React from "react";

const HomePage = () => {
  return (
    <div className="intro-text">
      <header></header>
      <main>
        <p style={{ "text-align": "center", "font-size": "50px" }}>
          Welcome to Passmaster, your all-in-one password storing solution!
        </p>
        <img
          src={require("../images/home_image.jpg")}
          style={{ "border-radius": "5%" }}
          class="center"
          alt=""
        ></img>
        <p style={{ "text-align": "center", "font-size": "20px" }}>
          We were founded on the idea that you can't put a price on privacy.
          That's why at Passmaster believe that everyone should be able to
          store their passwords safely, securely, and most importantly for free.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
