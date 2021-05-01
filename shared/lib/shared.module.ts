import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PipeModule } from './pipe';

const MODULES = [
  // Angular modules
  BrowserModule,
  BrowserAnimationsModule,
  // Custom modules
  PipeModule,
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class SharedModule { }
