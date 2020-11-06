import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoAppComponent } from './carrito-app.component';

describe('CarritoAppComponent', () => {
  let component: CarritoAppComponent;
  let fixture: ComponentFixture<CarritoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
