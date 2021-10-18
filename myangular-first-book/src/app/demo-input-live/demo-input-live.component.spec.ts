import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputLiveComponent } from './demo-input-live.component';

describe('DemoInputLiveComponent', () => {
  let component: DemoInputLiveComponent;
  let fixture: ComponentFixture<DemoInputLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoInputLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
