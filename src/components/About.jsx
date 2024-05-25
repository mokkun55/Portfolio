function About() {
  return (
    <div className="about">
      <h1 className="aboutMe">&lt;ABOUT ME/&gt;</h1>
      <div className="profile">
        <h1>Hi! I'm mokkun.</h1>
        <div className="main-prof">
          <p>
            はじめまして！ もっくんと申します。
            <br />
            ガジェット・アニメ・麻雀・かわいいものが好きです。
            <br />
            現在高専で情シス・プログラミングを勉強中… & 学生寮で寮長やってます。
            <br />
            -GitHub
            <a
              href="https://github.com/mokkun55"
              target="_blank"
              rel="noreferrer"
            >
              @mokkun55
            </a>
          </p>
          {/* TODO いらんかもIMG */}
          {/* <img src="/imgs/about/profIcon.jpg" alt="icon" className="MyIcon" />  */}
        </div>

        <div className="skill">
          <h2>
            {"{"}資格一覧{"}"}
          </h2>
          <ul>
            <li>ITパスポート (2023.8)</li>
            <li>運転免許[AT限] (2024.3)</li>
            <li>基本情報技術者試験 (取得に向け勉強中)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
