import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import {AddItemAction} from "../../../store/actions/course.action";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/models/app-state.model";
import { add } from 'src/store/actions/user.actions';


@Component({
    selector: 'my-app',
    templateUrl: './add-user.component.html',
    styleUrls: ['add-user.component.css']
})
export class AddUserComponent {

    formGroup: FormGroup;
    post: any = '';

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<AppState>
                ) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.formGroup = this.formBuilder.group({
            'email': [null, null],
            'name': [null, null],
            'about': [null, null],
        });
    }

    onSubmit(form: any) {
        this.store.dispatch(add(form));
    }

}
