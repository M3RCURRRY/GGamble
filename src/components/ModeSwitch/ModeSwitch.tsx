import styles from "./ModeSwitch.module.scss";

import roulette from "./../../assets/logos/roulette.png";
import slots from "./../../assets/logos/slots.png";

const ModeSwitch = () => {
  return (
    <div className={styles.modelist}>
      <img src={roulette} alt="Roulette"/>
      <img src={slots} alt="Slots"/>
      <img src={roulette} alt="Crash"/>
      <img src={slots} alt="Bets"/>
    </div>
  )
}

export default ModeSwitch;