import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: { number: 0 },
  reducers: {
    countChange(state,action) {
        state.number = action.payload
    },
  },
});

const countReducer = counterSlice.reducer;
const countActions = counterSlice.actions;

export {countReducer, countActions};

