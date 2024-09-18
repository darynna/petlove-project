import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./Auth/authSlice";
import { infoReducer } from "./Info/InfoSlice";

const persistConfig = {
  key: "user",
  whitelist: ["token"],
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, userReducer),
    info: persistReducer(persistConfig, infoReducer)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);