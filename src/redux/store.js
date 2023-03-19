import { configureStore } from '@reduxjs/toolkit'
import jokesSlice from './jokesSlice'

const store = configureStore({
  reducer: {
    jokes : jokesSlice,
  },
})

export default store;