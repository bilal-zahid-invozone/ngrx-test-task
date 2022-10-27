import { AppState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectUserState = (state: AppState) => state.users;
export const getUsers = createSelector(
  selectUserState,
  users => users
);
