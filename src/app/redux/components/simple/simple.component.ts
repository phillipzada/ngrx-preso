import { Component, Inject, OnInit } from '@angular/core';

import { LoggerService } from '../../../shared/services/logger.service';

declare var Redux;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: []
})
export class SimpleComponent implements OnInit {

  code = `function counter(state = 0, action: any) {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    case 'RESET': return 0;
    default: return state;
  }
}

const store = Redux.createStore(counter);
store.subscribe(() =>
  this.logger.log(store.getState())
);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'RESET' });
`;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.clear();
  }

  run() {
    this.logger.clear();

    function counter(state = 0, action: any) {
      switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'RESET': return 0;
        default: return state;
      }
    }

    const store = Redux.createStore(counter);
    store.subscribe(() =>
      this.logger.log(store.getState())
    );

    store.dispatch({ type: 'INCREMENT' });
    store.dispatch({ type: 'INCREMENT' });
    store.dispatch({ type: 'INCREMENT' });
    store.dispatch({ type: 'DECREMENT' });
    store.dispatch({ type: 'RESET' });

  }

}
