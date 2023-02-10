import Chat from "../../components/Chat/Chat";
import ModeSwitch from "../../components/ModeSwitch/ModeSwitch";
import styles from "./RouletteRoute.module.scss";

const RouletteRoute = () => {
  return <div className={styles.container}>
    <div className={styles.sidebar}>
      <ModeSwitch/>
      <Chat/>
    </div>
  </div>;
}

export default RouletteRoute;