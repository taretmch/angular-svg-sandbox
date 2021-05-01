import { NgModule } from '@angular/core';

import { SharedModule }     from '@lib/shared';
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
    TopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
