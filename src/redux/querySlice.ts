import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Query {
  dropdown1: string;
  dropdown2: string;
  dropdown3: string;
  dropdown4: string;
}

interface QueryState {
  [username: string]: Query[];
}

const initialState: QueryState = {};

const querySlice = createSlice({
  name: 'queries',
  initialState,
  reducers: {
    addQuery(state, action: PayloadAction<{ username: string; query: Query }>) {
      const { username, query } = action.payload;
      if (!state[username]) {
        state[username] = [];
      }
      state[username].push(query);
    },
    setQueries(state, action: PayloadAction<{ username: string; queries: Query[] }>) {
      const { username, queries } = action.payload;
      state[username] = queries;
    },
  },
});

export const { addQuery, setQueries } = querySlice.actions;
export default querySlice.reducer;




// ADD QUERY LOGIC ALONE

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Query {
//   dropdown1: string;
//   dropdown2: string;
//   dropdown3: string;
//   dropdown4: string;
// }

// interface QueryState {
//   queries: Query[];
// }

// const initialState: QueryState = {
//   queries: [],
// };

// const querySlice = createSlice({
//   name: 'queries',
//   initialState,
//   reducers: {
//     addQuery(state, action: PayloadAction<Query>) {
//       state.queries.push(action.payload);
//     },
//   },
// });

// export const { addQuery } = querySlice.actions;
// export default querySlice.reducer;