import { Component, OnInit, Input } from '@angular/core';

/**
 * Graph for sine curve
 */
@Component({
  selector:  'ngx-graph-plot-sine',
  templateUrl: './graph-plot-sine.component.html',
  styleUrls:  ['./graph-plot-sine.component.scss']
})
export class GraphPlotSineComponent implements OnInit {

  // --[ Public properties ]----------------------------------------------------
  /**
   * Canvas size
   */
  @Input() width = 800;
  @Input() height = 600;
  padding = 100;
  viewBox: { x: number, y: number, width: number, height: number };

  /**
   * Plot configuration
   */
  @Input() x0: number = - Math.PI;
  @Input() xN: number = Math.PI;
  @Input() division = 100;
  @Input() color = 'blue';

  /**
   * Plot value
   */
  xs: number[];
  ys: number[];

  // --[ Private properties ]---------------------------------------------------
  // --[ Public methods ]-------------------------------------------------------
  /**
   * A callback method that is invoked immediately after the default change
   * detector has checked the directive's data-bound properties for the first time,
   * and before any of the view or content children have been checked.
   */
  ngOnInit(): void {
    const deltaX = (this.xN - this.x0) / this.division;
    const xs   = [this.x0];
    const ys   = [this.applyFunction(this.x0)];
    const maxX = Math.max(Math.abs(this.x0), Math.abs(this.xN));
    let   maxY = Math.abs(ys[0]);

    /**
     * Calculate approximate values
     */
    for (let i = 0; i < this.division; i++) {
      const x = xs[i] + deltaX;
      const y = this.applyFunction(x);

      if (maxY < Math.abs(y)) {
        maxY = Math.abs(y);
      }
      xs.push(x);
      ys.push(y);
    }

    /**
     * Transform values to plot values
     */
    const maxXPlotValue = this.width / 2 - this.padding;
    const maxYPlotValue = this.height / 2 - this.padding;
    this.xs = xs.map(x => (x * maxXPlotValue / maxX));
    this.ys = ys.map(y => - (y * maxYPlotValue / maxY));

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
