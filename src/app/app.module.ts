import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from "@ngrx/store";
import { CourseReducer } from "../store/reducers/course.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      course: CourseReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
