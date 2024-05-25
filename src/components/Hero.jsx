import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="profile">
        <img src="/imgs/about/profIcon.jpg" alt="icon" className="MyIcon" />
        <div className="description">
          <h1>mokkun</h1>
          <p>Hello, World!</p>
        </div>
      </div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <h1 className="scroll"></h1>
    </div>
  );
}

export default Hero;
