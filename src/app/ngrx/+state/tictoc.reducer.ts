import * as tictoc from './tictoc.actions';
import * as moment from 'moment';
import { Toc } from '../shared/toc.model';

export interface State {
    loading: boolean;
    tocs: { [id: string]: Toc };
    keys: string[];
    latest: string;
}

export const initialState: State = {
    loading: false,
    tocs: {},
    keys: [],
    latest: null
};

export function reducer(state = initialState, action: tictoc.Actions): State {

    switch (action.type) {

        case tictoc.TIC: {

            const newTocs = Object.assign({}, state.tocs);
            const id = action.payload;
            newTocs[id] = {
                key: id,
                value: null
            };

            return {
                ...state,
                loading: true,
                tocs: newTocs,
                keys: Object.keys(newTocs)
            };
        }

        case tictoc.TOC: {

            const newTocs = Object.assign({}, state.tocs);
            const id = action.payload.key;
            newTocs[id] = action.payload;

            return {
                ...state,
                loading: false,
                tocs: newTocs,
                latest: id,
                keys: Object.keys(newTocs)
            };
        }

        default:
            return state;

    }

}

/* SELECTORS */
export const getTocs = (state: State) => state.tocs;
export const getLoading = (state: State) => state.loading;
export const getLatest = (state: State) => state.latest;
export const getKeys = (state: State) => state.keys;
