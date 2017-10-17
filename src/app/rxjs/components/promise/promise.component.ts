import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../../shared/services/logger.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: []
})
export class PromiseComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  code = `this.log('Sync - Started');

const promise = new Promise((resolve, reject) => {
  this.log('Async - Started');

  setTimeout(() => {
    this.log('Async - Timeout 1');
    resolve(21);
  }, 1000);

  setTimeout(() => {
    this.log('Async - Timeout 2');
    resolve(42);
  }, 3000);
});

promise
  .then((val) => this.log('Async - Returned: ' + val))
  .catch((err) => this.log('Async - Error: ' + err));

this.log('Sync - Finished');`;


  ngOnInit() {
    this.logger.clear();
  }

  log(msg) {
    this.logger.log(msg);
  }

  run() {
    this.logger.clear();

    this.log('Sync - Started');

    const promise = new Promise((resolve, reject) => {
      this.log('Async - Started');

      setTimeout(() => {
        this.log('Async - Timeout 1');
        resolve(21);
      }, 1000);

      setTimeout(() => {
        this.log('Async - Timeout 2');
        resolve(42);
      }, 3000);

    });

    promise
      .then((val) => this.log('Async - Returned: ' + val))
      .catch((err) => this.log('Async - Error: ' + err));

    this.log('Sync - Finished');

  }

}
