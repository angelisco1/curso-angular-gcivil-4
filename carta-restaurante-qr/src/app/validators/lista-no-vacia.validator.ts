import { AbstractControl, FormArray, ValidationErrors } from "@angular/forms";

export const listaNoVacia = (control: AbstractControl): ValidationErrors | null => {
  console.log({control})
  if ((control as FormArray).controls.length > 0) {
    return null
  }
  return {
    listaNoVacia: true
  }
}