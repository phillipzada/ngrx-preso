import { LoggerService } from '../../../shared/services/logger.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../../+state/reducers';
import { Toc } from '../../shared/toc.model';
import * as selectors from '../../+state/tictoc.selectors';
import * as actions from '../../+state/tictoc.actions';

@Component({
  selector: 'app-tic-toc',
  templateUrl: './tic-toc.component.html',
  styleUrls: []
})
export class TicTocComponent implements OnInit {

  loading = false;
  tocs$: Observable<Toc[]>;
  latest$: Observable<Toc>;
  showBorder = false;

  private timer;
  constructor(private store: Store<State>, private logger: LoggerService) { }

  ngOnInit() {
    this.logger.clear();

    this.tocs$ = this.store.select(selectors.selectTocArray);
    this.latest$ = this.store.select(selectors.selectLatestToc);
    this.store.select(selectors.selectLoading).subscribe(loading => this.loading = loading);

    // this.timer = Observable.timer(0, 1000).subscribe(() => this.tic());
  }

  tic() {
    this.store.dispatch(new actions.TicAction());

  }

  toggleBorder() {
    this.showBorder = !this.showBorder;
  }

}
