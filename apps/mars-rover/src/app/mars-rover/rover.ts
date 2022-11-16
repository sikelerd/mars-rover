export type Direction = 'north' | 'east' | 'south' | 'west';

export interface Rover {
  position: {
    x: number
    y: number,
  },
  direction: Direction,
}
