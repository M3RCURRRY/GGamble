import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { ButtonTypes } from "../../types";

import instlogo from "./../../assets/logos/instagram.png";
import twitterlogo from "./../../assets/logos/twitter.png";
import tglogo from "./../../assets/logos/telegram.png";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.navbar}>
        <h1>GGamble</h1>
        <nav>
          <ul>
            <li>Главная</li>
            <li>Пополнить</li>
            <li>Вывести</li>
            <li>Контроль честности</li>
            <li>Бонусы</li>
            <li>Контакты</li>
          </ul>
        </nav>
      </div>
      <div className={styles.authbar}>
        <div className={styles.socials}>
          <a href="#">
            <img src={instlogo} />
          </a>
          <a href="#">
            <img src={twitterlogo} />
          </a>
          <a href="#">
            <img src={tglogo} />
          </a>
        </div>
        <Button
          content="Sign In"
          onClick={() => null}
          type={ButtonTypes.FILLED}
        ></Button>
      </div>
    </header>
  );
};

export default Header;
