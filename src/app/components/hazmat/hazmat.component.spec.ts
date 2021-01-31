import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazmatComponent } from './hazmat.component';

describe('HazmatComponent', () => {
  let component: HazmatComponent;
  let fixture: ComponentFixture<HazmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazmatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HazmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
