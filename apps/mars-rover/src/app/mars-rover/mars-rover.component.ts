import {Component} from '@angular/core';
import {environment} from '../../environments/environment';
import {Direction, Rover} from "./rover";

@Component({
  selector: 'mars-rover-mars-rover',
  templateUrl: './mars-rover.component.html',
})
export class MarsRoverComponent {

  rover: Rover = {
    position: {
      x: environment.rover.startposition.x,
      y: environment.rover.startposition.y,
    },
    direction: environment.rover.startdirection as Direction,
  };
}
