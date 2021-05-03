import { Component, OnInit, Input } from '@angular/core';

/**
 * Graph for sine curve
 */
@Component({
  selector:  'ngx-graph-plot-sine-polyline',
  templateUrl: './graph-plot-sine-polyline.component.html',
  styleUrls:  ['./graph-plot-sine-polyline.component.scss']
})
export class GraphPlotSinePolylineComponent implements OnInit {

  // --[ Public properties ]----------------------------------------------------
  /**
   * Canvas size
   */
  @Input() width:  number = 800;
  @Input() height: number = 600;
  padding:         number = 100;
  viewBox:         { x: number, y: number, width: number, height: number };

  /**
   * Plot configuration
   */
  @Input() x0:       number = - Math.PI;
  @Input() xN:       number = Math.PI;
  @Input() division: number = 100;
  @Input() color:    string = 'blue';

  /**
   * Plot value
   */
  points: { x: number, y: number }[];

  // --[ Private properties ]---------------------------------------------------
  // --[ Public methods ]-------------------------------------------------------
  /**
   * A callback method that is invoked immediately after the default change
   * detector has checked the directive's data-bound properties for the first time,
   * and before any of the view or content children have been checked.
   */
  ngOnInit(): void {
    const deltaX = (this.xN - this.x0) / this.division;
    const points  = [{
      x: this.x0,
      y: this.applyFunction(this.x0)
    }];
    const maxX   = Math.max(Math.abs(this.x0), Math.abs(this.xN));
    let   maxY   = Math.abs(points[0].y);

    /**
     * Calculate approximate values
     */
    for (let i = 0; i < this.division; i++) {
      const x = points[i].x + deltaX;
      const y = this.applyFunction(x);

      if (maxY < Math.abs(y)) {
        maxY = Math.abs(y);
      }
      points.push({ x, y });
    }

    /**
     * Transform values to plot values
     */
    const maxXPlotValue = this.width / 2 - this.padding;
    const maxYPlotValue = this.height / 2 - this.padding;
    this.points         = points.map(point => {
      return {
        x: point.x * maxXPlotValue / maxX,
        y: - point.y * maxYPlotValue / maxY
      };
    });

    /**
     * Canvas configuration
     */
    this.viewBox = {
      x:      - this.width / 2,
      y:      - this.height / 2,
      width:  this.width,
      height: this.height
    };
  }

  // --[ Private methods ]------------------------------------------------------
  /**
   * Apply function to x value
   */
  private applyFunction(x: number): number {
    const sinX = Math.sin(x);
    return sinX;
  }
}
