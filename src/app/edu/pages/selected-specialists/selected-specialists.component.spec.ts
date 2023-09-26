import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSpecialistsComponent } from './selected-specialists.component';

describe('SelectedSpecialistsComponent', () => {
  let component: SelectedSpecialistsComponent;
  let fixture: ComponentFixture<SelectedSpecialistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedSpecialistsComponent]
    });
    fixture = TestBed.createComponent(SelectedSpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
