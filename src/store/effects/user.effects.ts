import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { add, storeUser } from '../actions/user.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private storage: StorageMap) {}

  setUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(add),
        map(action => {
          this.storage.set('users', action).subscribe();
          console.log(action);
        })
      ),
    { dispatch: false }
  );
}
