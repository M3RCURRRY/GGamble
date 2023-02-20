import { configureStore } from "@reduxjs/toolkit";

import {default as wsReducer} from "./../store/wsSlice";

enum WS_ACTIONS {
  SET_WS,
  CLOSE_WS
}

const store = configureStore({
  reducer: {
    ws: wsReducer
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;