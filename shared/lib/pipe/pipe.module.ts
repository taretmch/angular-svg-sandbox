import { NgModule } from '@angular/core';

import { SvgViewBoxPipe } from './svg-view-box.pipe';

const MODULES    = []
const COMPONENTS = [
  SvgViewBoxPipe
]

@NgModule({
  imports:      MODULES,
  declarations: COMPONENTS,
  exports:      MODULES.concat(COMPONENTS)
})
export class PipeModule {}
