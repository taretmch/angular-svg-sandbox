import { NgModule } from '@angular/core';

import { VendorModule }           from '@lib/vendor.module';
import { PipeModule }             from '@lib/pipe';
import { GraphPlotSineComponent } from './graph-plot-sine.component';

const MODULES = [
  VendorModule,
  PipeModule
]

const COMPONENTS = [
  GraphPlotSineComponent
]

@NgModule({
  imports:      MODULES,
  declarations: COMPONENTS,
  exports:      [MODULES, COMPONENTS]
})
export class GraphPlotSineModule {}
