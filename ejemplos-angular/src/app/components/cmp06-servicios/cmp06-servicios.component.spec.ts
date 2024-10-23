import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp06ServiciosComponent } from './cmp06-servicios.component';

describe('Cmp06ServiciosComponent', () => {
  let component: Cmp06ServiciosComponent;
  let fixture: ComponentFixture<Cmp06ServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp06ServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp06ServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
