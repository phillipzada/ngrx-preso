import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Entry } from '../../services/logger.model';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: []
})
export class LoggerComponent implements OnInit {

  logs$: Observable<Entry[]>;

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.logs$ = this.loggerService.logs$;
  }

}
