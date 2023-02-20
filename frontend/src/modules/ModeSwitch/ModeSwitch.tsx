import styles from "./ModeSwitch.module.scss";

import roulette from "./../../assets/logos/roulette.png";
import slots from "./../../assets/logos/slots.png";
import { Link } from "react-router-dom";

const ModeSwitch = () => {
  return (
    <div className={styles.modelist}>
      <Link to={"/"}><img src={roulette} alt="Roulette"/></Link>
      <Link to={"/slots"}><img src={slots} alt="Slots"/></Link>
      <img src={roulette} alt="Crash"/>
      <img src={slots} alt="Bets"/>
    </div>
  )
}

export default ModeSwitch;