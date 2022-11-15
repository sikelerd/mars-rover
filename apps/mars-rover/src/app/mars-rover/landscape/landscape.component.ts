import {Component, Input} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Rover} from '../rover';

@Component({
  selector: 'mars-rover-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.scss'],
})
export class LandscapeComponent {

  readonly height = environment.landscape.height;
  readonly width = environment.landscape.width;

  @Input()
  rover: Rover | undefined;

  classes(x: number, y: number) {
    return {
      'field-occupied': y === this.rover?.position.y && x === this.rover?.position.x,
      'field-occupied-east': 'east' === this.rover?.direction,
      'field-occupied-south': 'south' === this.rover?.direction,
      'field-occupied-west': 'west' === this.rover?.direction,
    }
  }
}
