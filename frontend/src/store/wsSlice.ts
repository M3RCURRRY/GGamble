import { createSlice } from "@reduxjs/toolkit";

export const wsSlice = createSlice({
  name: "ws",
  initialState: {
    wsc: <WebSocket | null> new WebSocket("ws://localhost:9000"),
  },
  reducers: {
    setWSC: (state, action) => {
      state.wsc = action.payload;
    },
    closeWSC: (state) => {
      state.wsc?.close();
      state.wsc = null;
    },
  }
})

export const { setWSC, closeWSC } = wsSlice.actions;
export default wsSlice.reducer; 