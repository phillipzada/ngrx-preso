import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { PrismComponent } from 'angular-prism';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrismComponent],
  providers: [],
  exports: [PrismComponent]
})
export class ComponentsModule { }
