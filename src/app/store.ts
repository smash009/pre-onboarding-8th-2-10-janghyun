import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "./kanbanSlice";

export const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
