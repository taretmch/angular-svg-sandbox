import { NgModule } from '@angular/core';

import { GraphPlotSineModule }        from './graph-plot-sine';
import { GraphPlotSinePolylineModule } from './graph-plot-sine-polyline';

const MODULES = [
  GraphPlotSineModule,
  GraphPlotSinePolylineModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class UIModule {}
