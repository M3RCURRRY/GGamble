import { ButtonTypes, ColorPositionTypes, IBetUser } from "../../types";
import Button from "../../ui/Button/Button";

import user from "./../../assets/logos/user.png";

import styles from "./ColorPosition.module.scss";

interface ColorPositionProps {
  type: ColorPositionTypes;
  betsData: IBetUser[];
}

const ColorPosition = (props: ColorPositionProps) => {
  return (
    <div className={styles.colorContainer}>
      <div
        className={`${
          props.type === ColorPositionTypes.RED
            ? styles.redPos
            : props.type === ColorPositionTypes.GREEN
            ? styles.greenPos
            : styles.blackPos
        }`}
      >
        <Button
          content="Bet"
          onClick={() => null}
          type={ButtonTypes.OUTLINED}
        />
      </div>
      <span className={styles.currentBet}>0</span>
      <div className={styles.betsList}>
        <div className={styles.colorStats}>
          <div className={styles.userCount}>
            <img src={user} alt="Users" />
            <span>{props.betsData.length}</span>
          </div>
          <span className={styles.betsCount}>
            {props.betsData.reduce((acc, value) => {
              return acc + +value.bet;
            }, 0)}
          </span>
        </div>
        <div className={styles.divider} />
        <div className={styles.userList}>
          {props.betsData.map((user, index) => {
            return (
              <div key={index} className={styles.userBetData}>
                <span>{user.username}</span>
                <span
                  className={`${
                    props.type === ColorPositionTypes.RED
                      ? styles.red
                      : props.type === ColorPositionTypes.GREEN
                      ? styles.green
                      : styles.black
                  }`}
                >
                  {user.bet}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorPosition;
