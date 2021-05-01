import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MODULES = [
  // Angular modules
  BrowserModule,
  BrowserAnimationsModule,
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class VendorModule { }
