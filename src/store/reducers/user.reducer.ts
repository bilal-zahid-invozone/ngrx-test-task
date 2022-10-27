import { Action, createReducer, on } from '@ngrx/store';
import { add, get, storeUser, UserInfo } from '../actions/user.actions';

export const userFeatureKey = 'users';

export interface UserState {
  name: string;
  email: string;
  bio: string;
}

export const initialState: UserState = {name: '', bio: '', email:''};

const userReducer = createReducer(
  initialState,

  on(add, (state, action) => {
    const {type, ...userInfo} = action
    
    return userInfo;
  }),
  on(get, (state, action) => {
    console.log(state, action, '<<<<<<')
    return state;
  })
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
