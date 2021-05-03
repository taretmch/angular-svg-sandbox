import { NgModule } from '@angular/core';

import { VendorModule }                  from '@lib/vendor.module';
import { PipeModule }                    from '@lib/pipe';
import { GraphPlotSinePolylineComponent } from './graph-plot-sine-polyline.component';

const MODULES = [
  VendorModule,
  PipeModule
];

const COMPONENTS = [
  GraphPlotSinePolylineComponent
];

@NgModule({
  imports:      MODULES,
  declarations: COMPONENTS,
  exports:      [MODULES, COMPONENTS]
})
export class GraphPlotSinePolylineModule {}
