import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero">
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
        <a href="#about">
          <img src="/imgs/about/profIcon.jpg" alt="icon" className="MyIcon" h />
        </a>
        <div className="description">
          <h1>mokkun</h1>
          <p>Hello, World!</p>
          {/* TODO モバイル矢印みえないらしい */}
          <div class="arrow-1-down arrow">⇣</div>
        </div>
      </motion.div>
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
      {/* eslint-disable-next-line */}
      <h1 className="scroll"></h1>
    </div>
  );
}

export default Hero;
