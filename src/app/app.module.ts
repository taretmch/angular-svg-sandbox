import { NgModule }            from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment }       from '../environments/environment';
import { SharedModule }      from '@lib/shared.module';
import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { TopModule }         from './top';
import { SineLineModule }    from './sine-line';
import { SinePolylineModule } from './sine-polyline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Common modules
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // App modules
    AppRoutingModule,
    // Page modules
    SineLineModule,
    SinePolylineModule,
    TopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
