import { Component } from '@angular/core';

/**
 * SVG polyline plot: Sine curve
 */
@Component({
  templateUrl: './sine-polyline.component.html',
  styleUrls:  ['./sine-polyline.component.scss']
})
export class SinePolylineComponent {

  /**
   * Code block
   */
  code = `<!-- Sine curve -->
<svg:polyline
  [attr.points] = "points | svgPoints"
  fill = 'none'
  [attr.stroke] = "color"
  [attr.strokeWidth] = "2"
/>`;
}
