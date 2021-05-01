import { Pipe, PipeTransform } from '@angular/core';

import { ViewBoxConf } from './view-box-conf.type'

/**
 * Pipe: Transform values for viewBox configuration
 */
@Pipe({ name: 'svgViewBox' })
export class SvgViewBoxPipe implements PipeTransform {
  transform(value: number[] | string | ViewBoxConf): string {
    if (typeof value === 'string') {
      return value
    } else if (value instanceof ViewBoxConf) {
      const boxValue = `${value.x}, ${value.y}, ${value.width}, ${value.height}`
      return boxValue
    } else if (typeof value === 'number[]') {
      const boxValue = value.map(v => v.toString).join(', ')
      return boxValue
    }
  }
}
