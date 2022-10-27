import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { AppState } from 'src/store/reducers';
import { getUsers } from 'src/store/selectors/users.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';
  users$: any;
  storage$: Observable<any>;

  constructor(private store: Store<AppState>, private storage: StorageMap) {
    this.users$ = this.store.pipe(select(getUsers));
    this.storage$ = this.storage.get('users');
  }
}
