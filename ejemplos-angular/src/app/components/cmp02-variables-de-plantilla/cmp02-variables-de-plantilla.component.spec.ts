import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02VariablesDePlantillaComponent } from './cmp02-variables-de-plantilla.component';

describe('Cmp02VariablesDePlantillaComponent', () => {
  let component: Cmp02VariablesDePlantillaComponent;
  let fixture: ComponentFixture<Cmp02VariablesDePlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp02VariablesDePlantillaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp02VariablesDePlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
