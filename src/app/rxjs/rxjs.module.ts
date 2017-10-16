import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PromiseComponent } from './components/promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ObservableComponent } from './components/observable/observable.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { ComponentsModule } from '../shared/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
    children: [
      {
        path: 'promise',
        component: PromiseComponent
      },
      {
        path: 'observable',
        component: ObservableComponent
      },
      {
        path: 'operator',
        component: OperatorsComponent
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
  declarations: [PromiseComponent, RxjsComponent,
    ObservableComponent, OperatorsComponent]
})
export class RxjsModule { }
