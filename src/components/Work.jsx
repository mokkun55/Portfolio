import React from "react";

function Work({ title, path, children, lang }) {
  return (
    <div className="work">
      <img src={path} alt={title} />
      <div class="mask">
        <div class="caption">
          <h1>{title}</h1>
          <p>{children}</p>
          <p>{lang}</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
