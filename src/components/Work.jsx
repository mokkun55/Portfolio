import React from "react";

function Work({ title, path, caption, children }) {
  return (
    <div className="work">
      <img src="/imgs/works/ma-jan_ojisan.png" alt="workImg" />
      <div class="mask">
        <div class="caption">
          <h1>麻雀</h1>
          <p>これは麻雀という僕がおすすめなゲームです</p>
          <p>JavaScript/React/html</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
