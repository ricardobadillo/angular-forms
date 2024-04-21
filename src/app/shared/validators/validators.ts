// Angular.
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const namePattern:  string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";



export const cantBeMe: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const formValue = control.value?.trim();

  if (formValue === 'Ricardo') {
    return { cantBeMe: true };
  }

  return null;
}
