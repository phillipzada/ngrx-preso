import { LoggerService } from '../../../shared/services/logger.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: []
})
export class ObservableComponent implements OnInit {

  code = `this.log('Sync - Started');

const observable = Observable.create((observer) => {

  this.log('Async - Started');

  setTimeout(() => {
    this.log('Async - Timeout Fired');
    observer.next(1);
  }, 1000);

  setTimeout(() => {
    this.log('Async - Timeout Fired');
    observer.next(2);
  }, 2000);

  setTimeout(() => {
    this.log('Async - Complete Fired');
    observer.complete();
  }, 2500);

  setTimeout(() => {
    this.log('Async - Timeout Fired');
    observer.next(3);
  }, 4000);

  return () => this.log('Async - Disposed');

});

const subscription = observable.subscribe(
  (value) => this.log('Async - Handled: ' + value),
  (error) => this.log('Async - Error: ' + error),
  () => this.log('Async - Completion Handled')
);

this.log('Sync - Finished');`;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.clear();
  }

  log(msg) {
    this.logger.log(msg);
  }

  run() {
    this.logger.clear();

    this.log('Sync - Started');

    const observable = Observable.create((observer) => {

      this.log('Async - Started');

      setTimeout(() => {
        this.log('Async - Timeout Fired');
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        this.log('Async - Timeout Fired');
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        this.log('Async - Complete Fired');
        observer.complete();
      }, 2500);

      setTimeout(() => {
        this.log('Async - Timeout Fired');
        observer.next(3);
      }, 4000);

      return () => this.log('Async - Disposed');

    });

    const subscription = observable.subscribe(
      (value) => this.log('Async - Handled: ' + value),
      (error) => this.log('Async - Error: ' + error),
      () => this.log('Async - Completion Handled')
    );

    this.log('Sync - Finished');

  }

}
