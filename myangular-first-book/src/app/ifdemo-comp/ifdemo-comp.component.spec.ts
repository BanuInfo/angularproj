import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfdemoCompComponent } from './ifdemo-comp.component';

describe('IfdemoCompComponent', () => {
  let component: IfdemoCompComponent;
  let fixture: ComponentFixture<IfdemoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfdemoCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfdemoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
