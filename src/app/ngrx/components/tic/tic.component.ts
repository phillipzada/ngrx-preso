import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-tic',
  templateUrl: './tic.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicComponent implements OnInit {

  @Output() tic = new EventEmitter();
  @Input() disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
