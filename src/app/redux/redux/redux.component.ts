import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../shared/services/logger.service';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: []
})
export class ReduxComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.clear();
  }

}
