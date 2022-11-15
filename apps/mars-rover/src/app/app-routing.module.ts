import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExerciseComponent} from "./exercise/exercise.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'exercise',
      },
      {
        path: 'exercise',
        component: ExerciseComponent,
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
