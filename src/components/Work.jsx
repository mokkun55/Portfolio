import React from "react";

function Work({ title, path, children, lang, url = "#" }) {
  return (
    <div className="work">
      <img src={path} alt={title} />
      <a href={url}>
        <div class="mask">
          <div class="caption">
            <h1>{title}</h1>
            <br />
            <p>{children}</p>
            <br />
            <p className="lang">{lang}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Work;
