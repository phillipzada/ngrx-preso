import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import * as moment from 'moment';
import { Entry } from './logger.model';

@Injectable()
export class LoggerService {

  private logs: Entry[] = [];

  logs$ = new BehaviorSubject<Entry[]>(null);

  constructor() {
  }

  clear() {
    this.logs = [];
    this.broadcast();
  }

  log(msg: string) {
    this.logs.push({
      time: moment(),
      message: msg
    });
    this.broadcast();

  }

  private broadcast() {
    this.logs$.next(this.logs);
  }

}
