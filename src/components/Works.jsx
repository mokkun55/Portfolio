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
          <a
            href="https://github.com/mokkun55/Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </Work>
        <Work
          title="ボイラーBOT"
          path="/imgs/works/linebot.png"
          lang="JavaScript / GAS"
        >
          寮で5時にボイラー(風呂)をつけないといけないのをお知らせするLINEbotです。
        </Work>
        <Work
          title="奉仕ポイント管理アプリ"
          path="/imgs/works/houshiApp.png"
          lang="react / firebase"
          url="https://housipoint-damy.vercel.app/kanri"
        >
          firebaseの練習で作った寮の奉仕ポイント(悪さをすると付く)をwebサイトで管理できるようにしたサイトです
          <a
            href="https://github.com/mokkun55/housiPoint-damy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
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
          <a
            href="https://github.com/mokkun55/React-todolist"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </Work>
      </div>
    </div>
  );
}

export default Works;
