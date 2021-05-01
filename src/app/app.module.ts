import { NgModule } from '@angular/core';

import { SharedModule }     from '@lib/shared';
import { AppRoutingModule } from './app.routes';
import { AppComponent }     from './app';
import { TopModule }        from './top';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    TopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
