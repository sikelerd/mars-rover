import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeComponent } from './landscape.component';
import {By} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';
import {Rover} from '../rover';

describe('LandscapeComponent', () => {
  let component: LandscapeComponent;
  let fixture: ComponentFixture<LandscapeComponent>;

  const x = 2;
  const y = 3;
  const rover: Rover = {
    position: {
      x,
      y,
    },
    direction: 'north',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandscapeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandscapeComponent);
    component = fixture.componentInstance;
    component.rover = rover;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show grid', () => {
    const rows = fixture.debugElement.queryAll(By.css('.row'));
    expect(rows).toHaveLength(environment.landscape.height);

    for(const row of rows) {
      const columns = row.queryAll(By.css('.column'));
      expect(columns).toHaveLength(environment.landscape.width);
    }
  });

  it('should show rover at correct position', () => {
    const x = 2;
    const y = 3;
    component.rover = {
      position: {
        x,
        y,
      },
      direction: 'north',
    };
    expect(component.classes(0, 0)['field-occupied']).toBe(false);
    expect(component.classes(x, 0)['field-occupied']).toBe(false);
    expect(component.classes(0, y)['field-occupied']).toBe(false);
    expect(component.classes(x, y)['field-occupied']).toBe(true);
  });

  it('should show rover at correct direction', () => {
    component.rover = {
      direction: 'north',
      position: {x: 0, y: 0},
    };
    expect(component.classes(0, 0)['field-occupied-east']).toBe(false);
    expect(component.classes(0, 0)['field-occupied-south']).toBe(false);
    expect(component.classes(0, 0)['field-occupied-west']).toBe(false);

    component.rover.direction = 'east';
    expect(component.classes(0, 0)['field-occupied-east']).toBe(true);
    expect(component.classes(0, 0)['field-occupied-south']).toBe(false);
    expect(component.classes(0, 0)['field-occupied-west']).toBe(false);

    component.rover.direction = 'south';
    expect(component.classes(0, 0)['field-occupied-east']).toBe(false);
    expect(component.classes(0, 0)['field-occupied-south']).toBe(true);
    expect(component.classes(0, 0)['field-occupied-west']).toBe(false);

    component.rover.direction = 'west';
    expect(component.classes(0, 0)['field-occupied-east']).toBe(false);
    expect(component.classes(0, 0)['field-occupied-south']).toBe(false);
    expect(component.classes(0, 0)['field-occupied-west']).toBe(true);
  })
});
