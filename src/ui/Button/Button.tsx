import { ButtonTypes } from "../../types";

import styles from "./Button.module.scss";

interface ButtonProps {
  content: string;
  onClick(): void;
  type: ButtonTypes;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${
        props.type === ButtonTypes.FILLED ? styles.filled : styles.outlined
      }`}
    >
      {props.content}
    </button>
  );
};

export default Button;
