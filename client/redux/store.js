// import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./reducers/user";
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
  reducer: {
    user: userReducer,

  },
});

