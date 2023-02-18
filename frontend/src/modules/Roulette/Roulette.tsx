import { useEffect, useRef, useState } from "react";
import { ButtonTypes, ColorPositionTypes, IBetUser, TextInputTypes } from "../../types";
import Button from "../../ui/Button/Button";
import TextInput from "../../ui/TextInput/TextInput";
import ColorPosition from "../ColorPosition/ColorPosition";
import styles from "./Roulette.module.scss";

const MOCK_LATEST = [1, 3, 3, 11, 5, 0, 6, 8, 9, 13];

const MOCK_RED_USERS: IBetUser[] = [
  {
    username: "User1",
    bet: "567"
  },
  {
    username: "NewUser",
    bet: "1999"
  },
  {
    username: "Dolbaeb",
    bet: "10"
  },
  {
    username: "Ludoman",
    bet: "66",
  },
  {
    username: "Aboba",
    bet: "400"
  }
]

const MOCK_GREEN_USERS: IBetUser[] = [
  {
    username: "User1111",
    bet: "55"
  },
  {
    username: "Clown",
    bet: "10"
  },
  {
    username: "RichMan",
    bet: "100"
  }
]

const MOCK_BLACK_USERS: IBetUser[] = [
  {
    username: "BlackUser",
    bet: "550"
  },
  {
    username: "Nigger",
    bet: "10000"
  },
  {
    username: "Obama",
    bet: "735"
  }
]

export default function Roulette() {
  const [value, setValue] = useState<string>("");
  const [time, setTime] = useState<number>(10);

  const timeRef = useRef(time);
  timeRef.current = time;

  let timer!: NodeJS.Timer;

  useEffect(() => {
    timer = setInterval(() => {
      const timeline = document.getElementById('timeline') as HTMLElement;
      if (timeRef.current <= 0) {
        setTime(10);
      }
      else setTime(timeRef.current - 1);
      //timeline.style.background = `linear-gradient(270deg, #3B3B41 ${100 - (10 * timeRef.current)}%, #FCBA03 ${100 - (10 * timeRef.current)}%)`;
      // timeline.style.background = `red`;
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [])

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
 
  const rotate = () => {
    const el = document.getElementById("roulette");
    if (el) {
      console.log(el.style.transition);
      const offset = `-${random(8, 17) * 92}px`;

      if (parseInt(el.style.backgroundPosition) < 0)
        el.style.backgroundPosition = "0px";
      else el.style.backgroundPosition = `-${random(8, 17) * 92}px`;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.counter} id="timeline">{time} second before roll ... </div>
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
            <TextInput initValue={value} type={TextInputTypes.NUMBER} onChange={setValue} placeholder="Your bet ammount ..."/>
            <div className={styles.betControls}>
              <Button content="Reset" onClick={() => setValue("")} type={ButtonTypes.OUTLINED}/>
              <Button content="+100" onClick={() => setValue((+value + 100) + "")} type={ButtonTypes.OUTLINED}/>
              <Button content="+500" onClick={() => setValue((+value + 500) + "")} type={ButtonTypes.OUTLINED}/>
              <Button content="+1000" onClick={() => setValue((+value + 1000) + "")} type={ButtonTypes.OUTLINED}/>
              <Button content="1/2" onClick={() => setValue(Math.floor((+value / 2)) + "")} type={ButtonTypes.OUTLINED}/>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.posContainer}>
        <ColorPosition type={ColorPositionTypes.RED} betsData={MOCK_RED_USERS}/>
        <ColorPosition type={ColorPositionTypes.GREEN} betsData={MOCK_GREEN_USERS}/>
        <ColorPosition type={ColorPositionTypes.BLACK} betsData={MOCK_BLACK_USERS}/>
      </div>
      <button onClick={rotate}>Rotate</button>
    </div>
  );
}
