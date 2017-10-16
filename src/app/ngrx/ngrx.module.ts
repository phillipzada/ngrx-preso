import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { META_REDUCERS, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ComponentsModule } from '../shared/components/components.module';
import { LoggerService } from '../shared/services/logger.service';
import { getMetaReducers, reducers } from './+state/reducers';
import { TicTocEffects } from './+state/tictoc.effects';
import { TicComponent } from './components/tic/tic.component';
import { TocComponent } from './components/toc/toc.component';
import { TicTocComponent } from './containers/tic-toc/tic-toc.component';
import { CustomRouterStateSerializer } from './shared/router-serialiser';

const routes: Routes = [
  {
    path: '',
    component: TicTocComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,

    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([TicTocEffects]),

    RouterModule.forChild(routes)

  ],
  providers: [
    {
      provide: META_REDUCERS,
      deps: [LoggerService],
      useFactory: getMetaReducers
    }
  ],
  declarations: [TicTocComponent, TicComponent, TocComponent]
})
export class NgrxModule { }
