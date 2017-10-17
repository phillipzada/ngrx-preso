import { Toc } from '../../shared/toc.model';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TocComponent implements OnInit {

  @Input() tocs: Toc[];
  @Input() latest: Toc;

  constructor() { }

  ngOnInit() {
  }

}
