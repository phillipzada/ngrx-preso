import { LoggerService } from '../../../shared/services/logger.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: []
})
export class OperatorsComponent implements OnInit {

  code = `const subscription = Observable
  .of(1, 2, 3, 4, 5)
  .takeWhile(v => v < 5)
  .map(x => x + '!!')
  .skip(1)
  .subscribe((s) => {
    this.logger.log(s);
  });
`;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.clear();
  }

  run() {
    this.logger.clear();

    const subscription = Observable
      .of(1, 2, 3, 4, 5)
      .takeWhile(v => v < 5)
      .map(x => x + '!!')
      .skip(1)
      .subscribe((s) => {
        this.logger.log(s);
      });

  }

}
