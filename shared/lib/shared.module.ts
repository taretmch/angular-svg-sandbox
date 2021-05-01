import { NgModule } from '@angular/core';

import { VendorModule } from './vendor.module';
import { PipeModule }   from './pipe';
import { UIModule }     from './ui';

const MODULES = [
  // Angular modules
  VendorModule,
  // Custom modules
  PipeModule,
  UIModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class SharedModule { }
