import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericAlertButonComponent } from './generic-alert-buton.component';

describe('GenericAlertButonComponent', () => {
  let component: GenericAlertButonComponent;
  let fixture: ComponentFixture<GenericAlertButonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericAlertButonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericAlertButonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
