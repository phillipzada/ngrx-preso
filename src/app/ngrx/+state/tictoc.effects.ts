import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import * as actions from './tictoc.actions';

@Injectable()
export class TicTocEffects {

    @Effect()
    tic$: Observable<Action> = this.actions$
        .ofType<actions.TicAction>(actions.TIC)
        // .mergeMap((action) => {
        .switchMap((action) => {
            return Observable.of(new actions.TicActionSuccess({
                key: action.payload,
                value: 'success'
            }))
                .delay(Math.floor((Math.random() * 3000) + 1));
        });

    constructor(private actions$: Actions) { }

}
