import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent }      from './top';
import { SineLineComponent } from './sine-line';

const routes: Routes = [
  { path: '',          component: TopComponent      },
  { path: 'sine/line', component: SineLineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
