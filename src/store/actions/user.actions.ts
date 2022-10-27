import { createAction, props } from '@ngrx/store';

export type UserInfo = { name: string, email: string, bio: string }


export const add = createAction('[User] add user',
    props<UserInfo>());
export const get = createAction('[User] get user');
export const storeUser = createAction(
    '[User] Store user',
    props<UserInfo>()
);
