import { Component } from '@angular/core';

/**
 * SVG line plot: Sine curve
 */
@Component({
  templateUrl: './sine-line.component.html',
  styleUrls:  ['./sine-line.component.scss']
})
export class SineLineComponent {

  /**
   * Code block
   */
  code: string = `<!-- Sine curve -->
<ng-container *ngFor="let x of xs; index as n">
  <svg:line
    *ngIf = "n > 0"
    [attr.x1] = "xs[n - 1]"
    [attr.y1] = "ys[n - 1]"
    [attr.x2] = "x"
    [attr.y2] = "ys[n]"
    [attr.stroke] = "color"
    [attr.strokeWidth] = "2"
  ></svg:line>
</ng-container>`;
}
