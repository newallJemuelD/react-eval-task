import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Query {
  dropdown1: string;
  dropdown2: string;
  dropdown3: string;
  dropdown4: string;
}

interface QueryState {
  queries: Query[];
}

const initialState: QueryState = {
  queries: [],
};

const querySlice = createSlice({
  name: 'queries',
  initialState,
  reducers: {
    addQuery(state, action: PayloadAction<Query>) {
      state.queries.push(action.payload);
    },
  },
});

export const { addQuery } = querySlice.actions;
export default querySlice.reducer;