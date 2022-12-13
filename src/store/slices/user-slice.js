import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: localStorage.getItem("email") ? localStorage.getItem("email") : null,
  id: localStorage.getItem("id") ? localStorage.getItem("id") : null,
  isLoggedIn: localStorage.getItem("isLoggedIn")
    ? localStorage.getItem("isLoggedIn")
    : false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.isLoggedIn = null;
    },
    logIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { addUser, removeUser, logIn } = userSlice.actions;

export default userSlice.reducer;
