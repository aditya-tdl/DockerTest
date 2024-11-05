import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import userReducer from "./slice/userSlice";
import authReducer from "../Slices/authSlice";
import snackbarReducer from "../Slices/snackbarSlice";
import loaderReducer from "../Slices/loaderSlice";
import languageReducer from "../Slices/languageSlice";
import flipReducer from "../Slices/flipSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  snackbar: snackbarReducer,
  loader: loaderReducer,
  language: languageReducer,
  flip: flipReducer,
});
// Configure persistence with a whitelist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Add only required slices here
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        // serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== "production",
  }
  // process.env.NODE_ENV !== 'production'
);
export const persistor = persistStore(store);
