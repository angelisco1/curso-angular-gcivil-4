import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoSugusComponent } from './carrito-sugus.component';

describe('CarritoSugusComponent', () => {
  let component: CarritoSugusComponent;
  let fixture: ComponentFixture<CarritoSugusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoSugusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoSugusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
