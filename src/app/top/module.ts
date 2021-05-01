import { NgModule } from '@angular/core';

import { SharedModule } from '@lib/shared'
import * as components  from './components'

const MODULES = [
  SharedModule
]

const COMPONENTS = [
  components.PageMainComponent
]

@NgModule({
  imports:      MODULES,
  declarations: COMPONENTS
})
export class TopModule {}
