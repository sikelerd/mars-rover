import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarsRoverComponent } from './mars-rover.component';
import { LandscapeComponent } from './landscape/landscape.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MarsRoverComponent,
    LandscapeComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
})
export class MarsRoverModule {}
