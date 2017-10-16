import { Action } from '@ngrx/store';
import { Toc } from '../shared/toc.model';

export const TIC = '[Tic Toc] Tic';
export const TOC = '[Tic Toc] Toc';

export class TicAction implements Action {
    payload: string;
    readonly type = TIC;

    constructor() {
        this.payload = Date.now().toString();
    }
}

export class TicActionSuccess implements Action {
    readonly type = TOC;

    constructor(public payload: Toc) { }
}

export type Actions = TicAction | TicActionSuccess;
