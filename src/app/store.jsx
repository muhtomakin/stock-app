import { configureStore, } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { persistStore, persistReducer, FLUSH, REGISTER, PAUSE, PURGE, REHYDRATE, PERSIST } from 'redux-persist'// defaults to localStorage for web
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import stockSlice from "../features/stockSlice";


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock: stockSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return(
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REGISTER, PAUSE, PURGE, REHYDRATE, PERSIST],
        },
    }))
  },
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store)
export default store;



 
 

 

 

 