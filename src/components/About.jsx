import { motion } from "framer-motion";

function About() {
  return (
    <div className="about">
      <h1 className="title">&lt;ABOUT ME/&gt;</h1>
      <motion.div
        className="profile"
        variants={{
          offscreen: {
            // 画面外の場合のスタイル
            y: 100,
            opacity: 0,
          },
          onscreen: {
            // 画面内の場合のスタイル
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
      >
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
        </div>

        <div className="skill">
          <h1>
            {"{"}資格一覧{"}"}
          </h1>
          <ul>
            <li>
              <p>ITパスポート (2023.8)</p>
            </li>
            <li>
              <p>第一種運転免許[AT限] (2024.3)</p>
            </li>
            <li>
              <p>基本情報技術者試験 (取得に向け勉強中)</p>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
