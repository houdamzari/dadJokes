
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  setup: '',
  punchline: '',
  jokesArr:[]
}

export const newArr = [];

  const headers = {
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': 'b00d8afd4bmsh5e78148b6f51e40p1bf507jsnf1905ba48f34',
  'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
};
 
export const fetchJokes = createAsyncThunk(
  "jokes/random",
  async (location, { rejectWithValue }) => {
    try {
      const response = await axios.get(import.meta.env.VITE_BASE_URL, { headers });
      return response.data.body[0]

    } catch (err) {
  console.log(err);
      return rejectWithValue(await err.response.data);    }
  }
);
export const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchJokes.fulfilled]: (state, action) => {
      state.setup = action.payload.setup;
      state.punchline = action.payload.punchline;
      const newJoke = {
        setup: state.setup,
        punchline: state.punchline 
      }
      state.jokesArr = [...state.jokesArr, newJoke]
      newArr = [...state.jokesArr]
    }
  }
  })

export default jokesSlice.reducer;
