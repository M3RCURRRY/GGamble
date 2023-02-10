import { useState } from "react";
import styles from "./Chat.module.scss";

// const options = ['Gambling chat', 'Betting chat', 'Free-to-speak', 'Slots chat'];
const options = [
  {
    mode: 'Gambling chat',
    desc: 'Discuss gambling'
  },
  {
    mode: 'Betting chat',
    desc: 'Share & discuss your predictions'
  },
  {
    mode: 'Slots chat',
    desc: 'Share your profit with other'
  },
  {
    mode: 'Free-to-speak',
    desc: 'General chat for fun'
  }
]

const Chat = () => {

  const [active, setActive] = useState<boolean>(false);

  return <div className={styles.chat}>
    <div onClick={() => setActive(!active)} className={active ? styles.selector_active : styles.selector_inactive}>Mode 1
      {
        active &&
        <div className={styles.selector_options}>
          {
            options.map((value, index) => {
              return <div className={styles.option} key={index}>
                <span className={styles.chatmode}>{value.mode}</span>
                <span className={styles.desc}>{value.desc}</span>
              </div>
            })
          }
        </div>
      }
    </div>
    123
    123
    123
  </div>;
};

export default Chat;
