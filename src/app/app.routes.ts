import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as top from './top';

const routes: Routes = [
  { path: '', component: top.PageMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
