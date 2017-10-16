import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleComponent } from './components/simple/simple.component';
import { ReduxComponent } from './redux/redux.component';
import { ComponentsModule } from '../shared/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ReduxComponent,
    children: [
      {
        path: 'simple',
        component: SimpleComponent
      }
    ],
  }
];
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SimpleComponent, ReduxComponent]
})
export class ReduxModule { }
