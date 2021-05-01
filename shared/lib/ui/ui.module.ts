import { NgModule } from '@angular/core';

import { GraphPlotSineModule } from './graph-plot-sine';

const MODULES = [
  GraphPlotSineModule,
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class UIModule {}
