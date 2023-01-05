import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";
import storage from "redux-persist/lib/storage"
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist"
import thunk from "redux-thunk";

const reducer = combineReducers({
  user: userSlice,
  [appApi.reducerPath]:appApi.reducer,
})

//persist our store

const persistConfig = {
    key: "root",
    storage,
    blacklist: [appApi.reducerPath],
}

const persistedReducer = persistReducer(persistConfig, reducer)

//creating the store 

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk, appApi.middleware],
})

// export default {reducer, persistConfig};
export default store;
