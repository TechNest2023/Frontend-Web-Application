import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledSessionsComponent } from './scheduled-sessions.component';

describe('ScheduledSessionsComponent', () => {
  let component: ScheduledSessionsComponent;
  let fixture: ComponentFixture<ScheduledSessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledSessionsComponent]
    });
    fixture = TestBed.createComponent(ScheduledSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
