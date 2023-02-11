import styles from "./Roulette.module.scss";

const MOCK_LATEST = [1, 3, 3, 11, 5, 0, 6, 8, 9, 13];

export default function Roulette() {
  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rotate = () => {
    const el = document.getElementById("roulette");
    if (el) {
      console.log(el.style.transition);
      const offset = `-${random(2000, 4400)}px`;

      if (parseInt(el.style.backgroundPosition) < 0)
        el.style.backgroundPosition = "0px";
      else el.style.backgroundPosition = "-92px";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.counter}>Second before roll ... </div>
        <div className={styles.roulette} id="roulette">
          <div className={styles.marker}></div>
        </div>
        <div className={styles.latestRolls}>
          {
            MOCK_LATEST.map((item: number, key: number) => {
              return <div key={key} className={`${styles.number} ${item > 7 ? styles.black : item !== 0 ? styles.red : styles.green}` }>
                {item}
              </div>
            })
          }
        </div>
        <div className={styles.balancePanel}>
          <div className={styles.balance}>
            <span>Balance:</span>
            <span className={styles.bal}>4933285</span>
          </div>
          <div className={styles.controls}>
            
          </div>
        </div>
      </div>
      <button onClick={rotate}>Rotate</button>
    </div>
  );
}
