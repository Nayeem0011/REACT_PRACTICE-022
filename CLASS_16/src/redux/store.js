import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    reset: (state) => { state.value = 0 },
  }
});

export const { increment, decrement, reset } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }
});

export default store;
