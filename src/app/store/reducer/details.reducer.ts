import { Action, createReducer, on } from '@ngrx/store';
import * as DetailsActions from '../action/details.actions';
import { Details } from '../../Model/details';
// import { stat } from 'fs';
import { state } from '@angular/animations';


export const employeeFeatureKey = 'details';

export interface DetailsState {
    detailsView: Details[];
}

export const initialState: DetailsState = {
  detailsView: []
};


export const detailsReducer = createReducer(
  initialState,
  on(DetailsActions.addDetails, 
    (state: DetailsState, {details}) => ({
      ...state, employees: [...state.detailsView, details]
    }))
);

export function reducer(state: DetailsState | undefined, action: Action): any {
  return detailsReducer(state, action);
}

