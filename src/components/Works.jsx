import React, { useEffect, useState } from "react";
import { client } from "../libs/client";

function Works() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const loadCMS = async () => {
      try {
        const data = await client.get({ endpoint: "works" });
        setDatas(data.contents);
        console.log(data.contents);
      } catch (error) {
        console.error(error);
      }
    };

    loadCMS();
  }, []);
  return (
    <div className="works">
      <h1 className="title">{"<WORKS/>"}</h1>
      <div className="image-grid">
        {datas.map((data, index) => (
          <div className="work" key={index}>
            <img src={data.imgPath.url} alt={data.title} />
            <a href={data.workUrl} target="_blank" rel="noreferrer">
              <div className="mask">
                <div className="caption">
                  <h1>{data.title}</h1>
                  <br />
                  <p>{data.description}</p>
                  <br />
                  <p className="lang">{data.language}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
