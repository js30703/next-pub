import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import sectionReducer from './section1Slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    section1: sectionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
