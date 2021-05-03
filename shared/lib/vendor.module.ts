import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { HighlightModule }         from 'ngx-highlightjs';

import { MatListModule }    from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

const MODULES = [
  // Angular modules
  BrowserModule,
  BrowserAnimationsModule,
  RouterModule,
  HighlightModule,
  // Angular Material
  MatListModule,
  MatSidenavModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class VendorModule { }
