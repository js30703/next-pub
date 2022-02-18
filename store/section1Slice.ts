import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface section1State {
  value: number;
}

const initialState: section1State = {
  value: 0,
};

export const section1Slice = createSlice({
  name: 'section1',
  initialState,
  reducers: {
    count: (state, action: PayloadAction<number>) => {
      const imgLength = action.payload;
      imgLength > state.value ? (state.value += 1) : (state.value = 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { count } = section1Slice.actions;

export default section1Slice.reducer;
