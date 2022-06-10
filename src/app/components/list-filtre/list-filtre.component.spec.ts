import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFiltreComponent } from './list-filtre.component';

describe('ListFiltreComponent', () => {
  let component: ListFiltreComponent;
  let fixture: ComponentFixture<ListFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFiltreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
