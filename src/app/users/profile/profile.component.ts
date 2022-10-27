import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { get, UserInfo } from 'src/store/actions/user.actions';
import { AppState } from 'src/store/reducers';


@Component({
    selector: 'user-profile',
    templateUrl: './profile.component.html',
})
export class ProfileComponent {
    private store: Store<AppState>;
    users$: Observable<UserInfo>;


    constructor(){
        this.users$ = this.store.select((store) => store.users);
        console.log(this.users$);

    }
}
