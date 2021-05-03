import { NgModule } from '@angular/core';

import { SvgPointsPipe }  from './svg-points.pipe';
import { SvgViewBoxPipe } from './svg-view-box.pipe';

const MODULES    = [];
const COMPONENTS = [
  SvgPointsPipe,
  SvgViewBoxPipe
];

@NgModule({
  imports:      MODULES,
  declarations: COMPONENTS,
  exports:      MODULES.concat(COMPONENTS)
})
export class PipeModule {}
