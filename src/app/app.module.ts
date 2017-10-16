import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoggerComponent } from './shared/components/logger/logger.component';
import { LoggerService } from './shared/services/logger.service';

import { MomentModule } from 'angular2-moment';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes: Routes = [
  {
    path: 'rxjs',
    loadChildren: 'app/rxjs/rxjs.module#RxjsModule'
  },
  {
    path: 'redux',
    loadChildren: 'app/redux/redux.module#ReduxModule'
  },
  {
    path: 'ngrx',
    loadChildren: 'app/ngrx/ngrx.module#NgrxModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    MomentModule,

    RouterModule.forRoot(routes)

  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
