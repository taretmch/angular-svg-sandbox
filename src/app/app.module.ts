import { NgModule }            from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment }      from '../environments/environment';
import { SharedModule }     from '@lib/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app';
import { TopModule }        from './top';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
