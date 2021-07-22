import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent }          from './top';
import { SineLineComponent }     from './sine-line';
import { SinePolylineComponent } from './sine-polyline';
import { CatComponent }          from './cat';

const routes: Routes = [
  { path: '',              component: TopComponent          },
  { path: 'sine/line',     component: SineLineComponent     },
  { path: 'sine/polyline', component: SinePolylineComponent },
  { path: 'cat',           component: CatComponent          },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
