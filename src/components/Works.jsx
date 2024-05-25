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
        >
          このページです。Reactを使って作ってます。
          <br />
          アニメーションはframer motion。それ以外はhtml cssで作ってます
          <br />
          さくらのレンタルサーバを使って公開しています。
        </Work>
        <Work
          title="ボイラーBOT"
          path="/imgs/works/linebot.png"
          lang="JavaScript / GAS"
        >
          寮で5時にボイラー(風呂)をつけないといけないのをお知らせしてくれるLINEbotです。
          <br />
          GASを使って5時に実行されるようにしています
        </Work>
        <Work
          title="NextBus"
          path="/imgs/works/nextbus.png"
          lang="html / css / JavaScript"
        >
          3年生のときの授業内でおこなったPBLの成果物です。
          <br />
          このときはじめてhtml, css, jsを触りました。
          <br />
          そして、ここからweb開発に興味を持ちました。
          <br />
          GitHubにプレゼン資料乗せてます。
        </Work>
        <Work
          title="React TODO List"
          path="/imgs/works/todolist.png"
          lang="React"
        >
          Reactを知って初めてつくったwebアプリです。
          このときから生のjsじゃなくてReactやNext.jsなどを使い始めました。
          <br />
        </Work>
      </div>
    </div>
  );
}

export default Works;
