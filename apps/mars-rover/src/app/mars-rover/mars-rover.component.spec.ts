import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsRoverComponent } from './mars-rover.component';
import {LandscapeComponent} from './landscape/landscape.component';
import {MatButtonModule} from '@angular/material/button';
import {By} from '@angular/platform-browser';

describe('MarsRoverComponent', () => {
  let component: MarsRoverComponent;
  let fixture: ComponentFixture<MarsRoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MarsRoverComponent,
        LandscapeComponent,
      ],
      imports: [MatButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MarsRoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide data to landscape', () => {
    const landscape = fixture.debugElement.query(By.css('mars-rover-landscape'));
    expect(landscape).toBeDefined();
    expect(landscape.componentInstance.rover).toEqual(component.rover);
  });

});
