import { Pipe, PipeTransform } from '@angular/core';

import { Point } from './point.type';

/**
 * Pipe: Transform values for points
 */
@Pipe({ name: 'svgPoints' })
export class SvgPointsPipe implements PipeTransform {
  transform(value: Point[]): string {
    const pointStr = value.map(v => `${v.x},${v.y}`).join(' ');
    return pointStr;
  }
}

