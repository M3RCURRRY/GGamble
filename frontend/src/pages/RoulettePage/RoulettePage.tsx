import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Chat from "../../modules/Chat/Chat";
import Header from "../../modules/Header/Header";
import ModeSwitch from "../../modules/ModeSwitch/ModeSwitch";
import Roulette from "../../modules/Roulette/Roulette";
import { RootState } from "../../store";
import { ButtonTypes } from "../../types";
import Button from "../../ui/Button/Button";

import styles from "./RoulettePage.module.scss";

const RoulettePage = () => {

  const rouletteRef = useRef<any>();

  const wsc = useSelector((state: RootState) => state.ws.wsc);
  const dispatch = useDispatch();

  useEffect(() => {

    // Idk how it can happens
    if (wsc === null) return;
    
    console.log("Entered")

    wsc.send(JSON.stringify({action: "HANDSHAKE", data: "ROULETTE"}));

    wsc.onmessage = (msg) => {
      if (msg.data === "ROLL") {
        rouletteRef.current.rotate();
      }
      console.log(`Message received: ${msg.data}`);
    };

    wsc.onclose = () => {
      console.log("Connection closed");
    };

    wsc.onerror = () => {
      console.log("Some error caused");
    };

  }, []);
  

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.rouletteContent}>
        <div className={styles.sidebar}>
          <ModeSwitch />
          <Chat />
        </div>
        <div className={styles.roulette}>
          <Roulette ref={rouletteRef} />
          <Button content="Send to Firebase" onClick={() => null} type={ButtonTypes.OUTLINED} />
        </div>
      </div>
    </div>
  );
};

export default RoulettePage;
