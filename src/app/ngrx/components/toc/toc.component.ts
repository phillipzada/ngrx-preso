import { Toc } from '../../shared/toc.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: []
})
export class TocComponent implements OnInit {

  @Input() tocs: Toc[];
  @Input() latest: Toc;

  constructor() { }

  ngOnInit() {
  }

}
