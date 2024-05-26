import React from "react";
import Work from "./Work";

function Works() {
  return (
    <div className="works">
      <h1 className="title">{"<WORKS/>"}</h1>
      <div className="image-grid">
        <Work
          title="Portfolio"
          path="/imgs/works/portfolio.png"
          lang="React / さくらのレンタルサーバ"
          url="https://mokkun55.com"
        >
          もっくんのポートフォリオサイト
        </Work>
        <Work
          title="ボイラーBOT"
          path="/imgs/works/linebot.png"
          lang="JavaScript / GAS"
        >
          寮で5時にボイラー(風呂)をつけないといけないのをお知らせするLINEbotです。
        </Work>
        <Work
          title="便利な時刻表"
          path="/imgs/works/nextbus.png"
          lang="html / css / JavaScript"
          url="https://mokkun55.github.io/nextbus/"
        >
          3年生のときの授業内でおこなったPBLの成果物です。
          GitHubにプレゼン資料乗せてます。
          <a
            href="https://github.com/mokkun55/nextbus"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </Work>
        <Work
          title="React TODO List"
          path="/imgs/works/todolist.png"
          lang="React"
          url="https://react-todolist-neon.vercel.app/"
        >
          Reactを知って初めてつくったwebアプリです。
        </Work>
      </div>
    </div>
  );
}

export default Works;
