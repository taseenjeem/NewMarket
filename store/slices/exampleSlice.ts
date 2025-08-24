import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  count: number;
  user: {
    name: string;
    email: string;
  } | null;
  isLoading: boolean;
}

const initialState: ExampleState = {
  count: 0,
  user: null,
  isLoading: false,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    setUser: (
      state,
      action: PayloadAction<{ name: string; email: string }>,
    ) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setUser,
  clearUser,
  setLoading,
} = exampleSlice.actions;

export default exampleSlice.reducer;
