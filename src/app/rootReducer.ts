import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '../services/api/baseApi';

/**
 * Deliberately small. Menu state, modals and accordions are component state; only genuine
 * application state belongs here, and so far that is server state via RTK Query.
 */
export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
