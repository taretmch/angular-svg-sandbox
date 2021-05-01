import { NgModule } from '@angular/core';

import { PipeModule }             from '@lib/pipe';
import { GraphPlotSineComponent } from './graph-plot-sine.component';

const MODULES = [
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
