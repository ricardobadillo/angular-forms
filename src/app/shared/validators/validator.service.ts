// Angular.
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';



@Injectable({ providedIn: 'root' })
export class ValidatorService {

  public namePattern:  string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  invalidUsername = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value?.trim().toLowerCase();

    if (value === 'ricardo') return { error: true };

    return null;
  };

  equalFields(password: string, confirm: string): ValidationErrors | null {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const firstPassword = formGroup.get(password)?.value;
      const secondPassword = formGroup.get(confirm)?.value;

      if (firstPassword !== secondPassword) {
        formGroup.get(confirm)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(confirm)?.setErrors(null);

      return null;
    }
  }
}