import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosSugusComponent } from './lista-productos-sugus.component';

describe('ListaProductosSugusComponent', () => {
  let component: ListaProductosSugusComponent;
  let fixture: ComponentFixture<ListaProductosSugusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProductosSugusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProductosSugusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
