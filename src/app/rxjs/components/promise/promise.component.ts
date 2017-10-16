import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../../shared/services/logger.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: []
})
export class PromiseComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  code = `this.logger.log('Sync code - Started');

const promise = new Promise((resolve, reject) => {
  this.logger.log('Async code - Started');

  setTimeout(() => {
    this.logger.log('Async code - Timeout Fired 1');
    resolve(21);
  }, 1000);

  setTimeout(() => {
    this.logger.log('Async code - Timeout Fired 2');
    resolve(42);
  }, 3000);
});

promise
  .then((value) => {
    this.logger.log('Async code Handled, Returned: ' + value);
  })
  .catch((err) => {
    this.logger.log('Async code - Error: ' + err);
  });

this.logger.log('Sync code - Finished');`;


  ngOnInit() {
    this.logger.clear();
  }

  run() {
    this.logger.clear();

    this.logger.log('Sync code - Started');

    const promise = new Promise((resolve, reject) => {
      this.logger.log('Async code - Started');

      setTimeout(() => {
        this.logger.log('Async code - Timeout Fired 1');
        resolve(21);
      }, 1000);

      setTimeout(() => {
        this.logger.log('Async code - Timeout Fired 2');
        resolve(42);
      }, 3000);
    });

    promise
      .then((value) => {
        this.logger.log('Async code Handled, Returned: ' + value);
      })
      .catch((err) => {
        this.logger.log('Async code - Error: ' + err);
      });

    this.logger.log('Sync code - Finished');

  }

}
