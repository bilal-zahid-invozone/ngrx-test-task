import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';

import {CourseItem} from "../../../store/models/courseItem.model";
import {AppState} from "../../../store/models/app-state.model";


@Component({
  selector: 'user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {

  courseItems$: Observable<Array<CourseItem>>;

  data: Array<CourseItem>;

  constructor(
      private titleService: Title,
      private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.courseItems$ = this.store.select((store) => store.course);
    this.store.select((store) => store.course).subscribe((d) => {
      this.data = d;
    })
    this.titleService.setTitle('angular-material-template - Users');
  }
}
