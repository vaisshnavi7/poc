import { Component, OnInit, Output } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormControl,ReactiveFormsModule  } from '@angular/forms';
import { Details } from '../Model/details';
import * as DetailsActions from '../store/action/details.actions';
import {select, Store} from '@ngrx/store';
import {DetailsState} from '../../app/store/reducer/details.reducer';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  firstName = '';
  lastName  = '';
  age       = 0;
  gender    = '';
  role      = '';
  experience= '';
  details  = {
    firstName:'',
    lastName:'',
    age     :0,
    gender  :'',
    role    :'',
    experience:''
  };
  detailsForm: FormGroup;
  
  constructor(private store: Store<DetailsState>) {
    this.detailsForm = new FormGroup({
      "firstName": new FormControl(this.details.firstName, [Validators.required]),
      "lastName": new FormControl(this.details.lastName, [Validators.required]),
      "age": new FormControl(this.details.age, [Validators.required]),
      "gender": new FormControl(this.details.gender, [Validators.required]),
      "role": new FormControl(this.details.role, [Validators.required]),
      "experience": new FormControl(this.details.experience, [Validators.required])
    });
  }

  ngOnInit(): void {
  }
  
  
  addDetails(): void {
    const details = new Details();
    details.firstName = this.detailsForm.value.firstName;
    details.lastName  = this.detailsForm.value.lastName;
    details.age       = this.detailsForm.value.age;
    details.gender    = this.detailsForm.value.gender;
    details.role      = this.detailsForm.value.role;
    details.experience = this.detailsForm.value.experience;
    this.store.dispatch(DetailsActions.addDetails(details));
  }
}
