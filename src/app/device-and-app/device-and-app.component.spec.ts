import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAndAppComponent } from './device-and-app.component';

describe('DeviceAndAppComponent', () => {
  let component: DeviceAndAppComponent;
  let fixture: ComponentFixture<DeviceAndAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceAndAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAndAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
