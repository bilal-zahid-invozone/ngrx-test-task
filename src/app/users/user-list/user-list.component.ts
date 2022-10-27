import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import {debounceTime, distinctUntilChanged, fromEvent, map, Observable, startWith} from 'rxjs';
import { MatDialog } from "@angular/material/dialog";

import {AddUserComponent} from "../add-user/add-user.component";
import {CourseItem} from "../../../store/models/courseItem.model";
import { AppState } from 'src/store/reducers';
import { StorageMap } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChild('filterInputRef') private readonly filterInput: ElementRef;

  courseItems$: Observable<Array<CourseItem>>;
  storage$: Observable<any>;


  constructor(
    private titleService: Title,
    public dialog: MatDialog,
    private store: Store<AppState>,
    private storage: StorageMap

  ) {
    this.storage$ = this.storage.get('users');
    console.log(this.storage$);

  }

  openDialog() {
    console.log( this.store.select((store) => store.users));

    this.dialog.open(AddUserComponent);
  }

  ngOnInit() {
    this.titleService.setTitle('angular-material-template - Users');
  }

  ngAfterViewInit() {
    fromEvent(this.filterInput.nativeElement, 'keyup').pipe(
        map((_event: any) => (<HTMLInputElement>_event.target).value.toLocaleLowerCase()),
        startWith(''),
        debounceTime(30),
        distinctUntilChanged(),
    ).subscribe((value: string) => {
      console.log(value)
    });
  }
}
