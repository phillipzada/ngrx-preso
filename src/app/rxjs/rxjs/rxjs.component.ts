import { LoggerService } from '../../shared/services/logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: []
})
export class RxjsComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.clear();
  }

}
