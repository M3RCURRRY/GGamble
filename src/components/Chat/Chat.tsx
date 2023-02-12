import { useState } from "react";
import { ButtonTypes } from "../../types";
import Button from "../Button/Button";
import styles from "./Chat.module.scss";

interface IChatMessage {
  userId: number;
  username: string;
  message: string;
  date: string;
}

const MOCK_CHAT: IChatMessage[] = [
  {
    userId: 1,
    username: "User1",
    message: "First message First message First message First message First message First message First message ",
    date: "11.02.2023 11:45",
  },
  {
    userId: 5,
    username: "User5",
    message: "My message",
    date: "11.02.2023 11:48",
  },
  {
    userId: 2,
    username: "Second User",
    message: "Example message",
    date: "11.02.2023 12:00",
  },
  {
    userId: 2,
    username: "Second User",
    message: "Example message Example message Example message Example message Example message Example message Example message Example message Example message Example message ",
    date: "11.02.2023 12:10",
  },
  {
    userId: 8,
    username: "User5",
    message: "My message",
    date: "11.02.2023 16:48",
  },
  {
    userId: 11,
    username: "Second User",
    message: "Example message",
    date: "11.02.2023 12:45",
  },
  {
    userId: 12,
    username: "Second User",
    message: "Example message Example message Example message Example message Example message Example message Example message Example message Example message Example message ",
    date: "11.02.2023 13:55",
  },
  {
    userId: 876,
    username: "User5",
    message: "My message",
    date: "11.02.2023 22:48",
  },
  {
    userId: 151,
    username: "Second User",
    message: "Example message",
    date: "12.02.2023 12:45",
  }
];

const options = [
  {
    mode: "Gambling chat",
    desc: "Discuss gambling",
  },
  {
    mode: "Betting chat",
    desc: "Share & discuss your predictions",
  },
  {
    mode: "Slots chat",
    desc: "Share your profit with other",
  },
  {
    mode: "Free-to-speak",
    desc: "General chat for fun",
  },
];

const Chat = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={styles.chat}>
      <div
        onClick={() => setActive(!active)}
        className={active ? styles.selector_active : styles.selector_inactive}
      >
        Mode 1
        {active && (
          <div className={styles.selector_options}>
            {options.map((value, index) => {
              return (
                <div className={styles.option} key={index}>
                  <span className={styles.chatmode}>{value.mode}</span>
                  <span className={styles.desc}>{value.desc}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.chatMessages}>
        {MOCK_CHAT.concat(MOCK_CHAT).map((value) => {
          return (
            <div key={value.userId + "_" + value.date} className={styles.messageContainer}>
              <div className={styles.messageStats}>
                <span>{value.username}</span>
                <span>{value.date}</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.messageContent}>
                {value.message}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.messageInput}>
          <input type="text" placeholder="Your message" className={styles.chatInput}/>
          <Button type={ButtonTypes.OUTLINED} content="Send" onClick={() => null}/>
      </div>
    </div>
  );
};

export default Chat;
