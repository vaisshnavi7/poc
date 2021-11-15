import { createAction, props } from '@ngrx/store';
import { Details } from '../../Model/details';

export const addDetails = createAction(
  '[Details] emp detailsView',
  (details: Details) => ({details})
);




