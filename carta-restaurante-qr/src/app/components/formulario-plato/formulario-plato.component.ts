import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plato } from '../../types/plato';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-plato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-plato.component.html',
  styleUrl: './formulario-plato.component.css'
})
export class FormularioPlatoComponent {
  @Input() plato: Plato | null = null
  @Output() onSave = new EventEmitter<Plato>()

  ingredientes: Array<string> = [
    'Patata',
    'Sal',
    'Aceite',
    'Tomate',
    'Pollo',
    'Ternera',
    'Fideos'
  ]

  form: FormGroup | null = null

  ngOnInit() {
    this.form = this.getInitialForm(this.plato!)
  }

  toggleIngrediente(event: Event) {
    const ingrediente = (event.target as HTMLInputElement).value

    const ingredientes = this.form?.getRawValue().ingredientes

    if (ingredientes.includes(ingrediente)) {
      // Quitar el ingrediente

      const ingredientesActualizados = (this.form?.get('ingredientes') as FormArray).controls.filter((control: AbstractControl) => {
        if (control.value !== ingrediente) {
          return true
        }
        return false
      })

      console.log(ingredientesActualizados)

      // TODO: revisar el error
      // if (this.form?.get('ingredientes')) {
      //   this.form.get('ingredientes')?.setValue(ingredientesActualizados)
      // }

    } else {
      // Añadir el ingrediente
      const formControl = new FormControl(ingrediente);

      (this.form?.get('ingredientes') as FormArray).controls.push(formControl)
    }
  }

  guardar() {
    console.log(this.form)
    // console.log(this.form?.value)
    const plato = this.form?.getRawValue()
    console.log(plato)

    this.onSave.emit(plato)
  }

  private getInitialForm(plato: Plato) {
    return new FormGroup({
      nombre: new FormControl(plato.nombre, [Validators.required]),
      descripcion: new FormControl(plato.descripcion, Validators.required),
      precio: new FormControl(plato.precio, [Validators.required, Validators.min(0)]),
      imagen: new FormControl(plato.imagen, [Validators.required]),
      ingredientes: new FormArray([]),
      alergenos: new FormArray([]),
      disponible: new FormControl(plato.disponible),
      id: new FormControl(plato.id),
    })
  }

}
