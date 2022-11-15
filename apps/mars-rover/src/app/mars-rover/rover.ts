export type Direction = 'north' | 'east' | 'south' | 'west';
export type Rotation = 'clockwise' | 'counter-clockwise';
export type Movement = 'forward' | 'backward'

export interface Rover {
  position: {
    x: number
    y: number,
  },
  direction: Direction,
}
