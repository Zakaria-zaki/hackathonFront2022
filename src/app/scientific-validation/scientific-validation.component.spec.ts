import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientficValidatioComponent } from './scientific-validation.component';

describe('ScientficValidatioComponent', () => {
  let component: ScientficValidatioComponent;
  let fixture: ComponentFixture<ScientficValidatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientficValidatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientficValidatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
