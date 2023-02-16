import Chat from "../../modules/Chat/Chat";
import ModeSwitch from "../../modules/ModeSwitch/ModeSwitch";
import Roulette from "../../modules/Roulette/Roulette";

import styles from "./RoulettePage.module.scss";

const RoulettePage = () => {
  return <div className={styles.container}>
    <div className={styles.sidebar}>
      <ModeSwitch/>
      <Chat/>
    </div>
    <div className={styles.roulette}>
      <Roulette/>
    </div>
  </div>;
}

export default RoulettePage;