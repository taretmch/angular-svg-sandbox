import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PipeModule } from './pipe';
import { UIModule }   from './ui';

const MODULES = [
  // Angular modules
  BrowserModule,
  BrowserAnimationsModule,
  // Custom modules
  PipeModule,
  UIModule,
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class SharedModule { }
