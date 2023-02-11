import Chat from "../../components/Chat/Chat";
import ModeSwitch from "../../components/ModeSwitch/ModeSwitch";
import Roulette from "../../components/Roulette/Roulette";
import styles from "./RouletteRoute.module.scss";

const RouletteRoute = () => {
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

export default RouletteRoute;