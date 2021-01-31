import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesinfectantComponent } from './desinfectant.component';

describe('DesinfectantComponent', () => {
  let component: DesinfectantComponent;
  let fixture: ComponentFixture<DesinfectantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesinfectantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesinfectantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
