import { Component, OnInit } from '@angular/core';
// import { ColDef } from 'ag-grid-community';
import{FormComponent} from '../../app/form/form.component'
import { Observable } from 'rxjs/internal/Observable';
import { Details } from '../Model/details';
import * as DetailsActions from '../store/action/details.actions';
import {select, Store} from '@ngrx/store';
import {DetailsState} from '../../app/store/reducer/details.reducer';
import { selectDetails } from '../store/selector/details.selectors';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  detailsView$: Observable<Details[]>;
  
 
  constructor(private store: Store<DetailsState>) {
    this.detailsView$ = this.store.pipe(select(selectDetails))
    console.log(this.detailsView$)
  }

  ngOnInit(): void {
  }
//   columnDefs: ColDef[] = [
//     { field: 'FirstName' },
//     { field: 'LastName' },
//     { field: 'Age'},
//     { field: 'Gender'},
//     { field: 'Role'},
//     { field: 'Experience'}

// ];

// rowData = [
//     { FirstName: 'detailsView$.firstName', LastName: 'Celica', Age: 35, Gender:'Female',Role:'Front end',Experience:'5' },
//     { FirstName: 'Toyota', LastName: 'Celica', Age: 35, Gender:'Female',Role:'Front end',Experience:'5' }
// ];
}
