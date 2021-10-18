import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompNewComponent } from './first-comp-new.component';

describe('FirstCompNewComponent', () => {
  let component: FirstCompNewComponent;
  let fixture: ComponentFixture<FirstCompNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCompNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCompNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
