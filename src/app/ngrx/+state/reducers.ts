import { LoggerService } from '../../shared/services/logger.service';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { RouterStateUrl } from '../shared/router-serialiser';
import * as fromTicToc from './tictoc.reducer';
import * as actions from './tictoc.actions';

export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
    ticks: fromTicToc.State;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer,
    ticks: fromTicToc.reducer
};

declare var window;

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {

        if (action.type === actions.TIC || action.type === actions.TOC) {
            window.logService.log(action.type + ' | ' + JSON.stringify(action.payload));
        }

        return reducer(state, action);
    };
}

// export const metaReducers: MetaReducer<State>[] = [logger, storeFreeze];

export function getMetaReducers(logService: LoggerService): MetaReducer<State>[] {
    window.logService = logService;
    return [logger, storeFreeze];
}

