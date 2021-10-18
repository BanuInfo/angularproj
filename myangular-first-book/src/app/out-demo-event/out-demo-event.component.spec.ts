import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutDemoEventComponent } from './out-demo-event.component';

describe('OutDemoEventComponent', () => {
  let component: OutDemoEventComponent;
  let fixture: ComponentFixture<OutDemoEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutDemoEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutDemoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
