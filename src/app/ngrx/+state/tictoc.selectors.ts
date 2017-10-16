import { State } from './tictoc.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTicToc from './tictoc.reducer';
import * as _ from 'lodash';

export const selectState = createFeatureSelector<State>('ticks');
export const selectLoading = createSelector(selectState, fromTicToc.getLoading);

export const selectKeys = createSelector(selectState, fromTicToc.getKeys);
export const selectLatest = createSelector(selectState, fromTicToc.getLatest);
export const selectTocs = createSelector(selectState, fromTicToc.getTocs);

export const selectTocArray = createSelector(selectKeys, selectTocs,
    (keys, map) => _.orderBy(keys, Number, 'desc').map(k => map[k]));

export const selectLatestToc = createSelector(selectLatest, selectTocs,
    (key, map) => map[key]);
