import { configureStore } from '@reduxjs/toolkit'
import jokesSlice from './jokesSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['jokesArr']
}

const persistedReducer = persistReducer(persistConfig, jokesSlice)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const Persistor = persistStore(store)
export default store;