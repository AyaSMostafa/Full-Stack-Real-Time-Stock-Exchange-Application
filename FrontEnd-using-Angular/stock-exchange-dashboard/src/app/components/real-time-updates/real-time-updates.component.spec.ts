import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeUpdatesComponent } from './real-time-updates.component';

describe('RealTimeUpdatesComponent', () => {
  let component: RealTimeUpdatesComponent;
  let fixture: ComponentFixture<RealTimeUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealTimeUpdatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealTimeUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
