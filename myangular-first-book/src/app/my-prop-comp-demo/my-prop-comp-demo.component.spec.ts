import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropCompDemoComponent } from './my-prop-comp-demo.component';

describe('MyPropCompDemoComponent', () => {
  let component: MyPropCompDemoComponent;
  let fixture: ComponentFixture<MyPropCompDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPropCompDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPropCompDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
