import Chat from "../../modules/Chat/Chat";
import Header from "../../modules/Header/Header";
import ModeSwitch from "../../modules/ModeSwitch/ModeSwitch";
import Roulette from "../../modules/Roulette/Roulette";

import styles from "./RoulettePage.module.scss";

const RoulettePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.rouletteContent}>
        <div className={styles.sidebar}>
          <ModeSwitch />
          <Chat />
        </div>
        <div className={styles.roulette}>
          <Roulette />
        </div>
      </div>
    </div>
  );
};

export default RoulettePage;
