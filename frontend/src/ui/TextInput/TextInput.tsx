import { ChangeEvent, useState } from "react";
import { TextInputTypes } from "../../types";

import styles from "./TextInput.module.scss";

interface TextInputProps {
  initValue?: string;
  onChange(v: string): void
  type: TextInputTypes;
  placeholder: string;
}

const TextInput = (props: TextInputProps) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    validate(e.target.value);
  }

  const validate = (v: string) => {
    switch(props.type) {
      case TextInputTypes.NUMBER:
        if (+v || +v === 0) props.onChange(v);
        break;
      case TextInputTypes.TEXT:
        props.onChange(v);
        break;
      default:
        break;
    }
  }

  return <input className={styles.font} type="text" onChange={(e) => changeHandler(e)} placeholder={props.placeholder} value={props.initValue} />
}

export default TextInput;