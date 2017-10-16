import { LoggerService } from '../../../shared/services/logger.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: []
})
export class ObservableComponent implements OnInit {

  code = `this.logger.log('Sync - Started');

const observable = Observable.create((observer) => {

  this.logger.log('Async - Started');

  setTimeout(() => {
    this.logger.log('Async - Timeout Fired');
    observer.next(1);
  }, 500);

  setTimeout(() => {
    this.logger.log('Async - Timeout Fired');
    observer.next(2);
  }, 1000);

  setTimeout(() => {
    this.logger.log('Async - Complete Fired');
    observer.complete();
  }, 1500);

  setTimeout(() => {
    this.logger.log('Async - Timeout Fired');
    observer.next(3);
  }, 2000);

  return () => this.logger.log('Async - Disposed');

});

const subscription = observable.subscribe(
  (value) => {
    this.logger.log('Async - Handled: ' + value);
  },
  (error) => {
    this.logger.log('Async - Error: ' + error);
  },
  () => {
    this.logger.log('Async - Completion Handled');
  }
);

this.logger.log('Sync - Finished');
`;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.clear();
  }

  run() {
    this.logger.clear();

    this.logger.log('Sync - Started');

    const observable = Observable.create((observer) => {

      this.logger.log('Async - Started');

      setTimeout(() => {
        this.logger.log('Async - Timeout Fired');
        observer.next(1);
      }, 500);

      setTimeout(() => {
        this.logger.log('Async - Timeout Fired');
        observer.next(2);
      }, 1000);

      setTimeout(() => {
        this.logger.log('Async - Complete Fired');
        observer.complete();
      }, 1500);

      setTimeout(() => {
        this.logger.log('Async - Timeout Fired');
        observer.next(3);
      }, 2000);

      return () => this.logger.log('Async - Disposed');

    });

    const subscription = observable.subscribe(
      (value) => {
        this.logger.log('Async - Handled: ' + value);
      },
      (error) => {
        this.logger.log('Async - Error: ' + error);
      },
      () => {
        this.logger.log('Async - Completion Handled');
      }
    );

    this.logger.log('Sync - Finished');

  }

}
