export enum ButtonTypes {
  FILLED = "FILLED",
  OUTLINED = "OUTLINED"
}

export enum TextInputTypes {
  TEXT,
  NUMBER
}

export enum ColorPositionTypes {
  RED = "RED",
  GREEN = "GREEN",
  BLACK = "BLACK"
}

export interface IBetUser {
  username: string;
  bet: string;
}