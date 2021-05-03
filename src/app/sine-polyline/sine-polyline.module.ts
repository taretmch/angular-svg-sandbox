import { NgModule } from '@angular/core';

import { SharedModule } from '@lib/shared.module';
import * as components  from './components';

const MODULES = [
  SharedModule
];

const COMPONENTS = [
  components.SinePolylineComponent
];

@NgModule({
  imports:      MODULES,
  declarations: COMPONENTS
})
export class SinePolylineModule {}
