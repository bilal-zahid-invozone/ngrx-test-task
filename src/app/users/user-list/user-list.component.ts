import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import {debounceTime, distinctUntilChanged, fromEvent, map, Observable, startWith} from 'rxjs';
import { MatDialog } from "@angular/material/dialog";

import {AddUserComponent} from "../add-user/add-user.component";
import {CourseItem} from "../../../store/models/courseItem.model";
import {AppState} from "../../../store/models/app-state.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChild('filterInputRef') private readonly filterInput: ElementRef;

  courseItems$: Observable<Array<CourseItem>>;

  constructor(
    private titleService: Title,
    public dialog: MatDialog,
    private store: Store<AppState>
  ) {}

  openDialog() {
    this.courseItems$ = this.store.select((store) => store.course);
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
