import { configureStore } from "@reduxjs/toolkit";
import createMenuReducer from "./features/createMenuSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { createMenuReducer },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
