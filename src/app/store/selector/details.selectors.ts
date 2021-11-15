import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDetails from '../reducer/details.reducer'

export const selectDetailsState = createFeatureSelector<fromDetails.DetailsState>(
    fromDetails.employeeFeatureKey
);

export const selectDetails = createSelector(
    selectDetailsState,
    (state: fromDetails.DetailsState) => state.detailsView
);