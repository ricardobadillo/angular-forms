// Angular.
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';



@Injectable({ providedIn: 'root' })
export class EqualFiedls {

  public equalFields(password: string, confirm: string): ValidationErrors | null {

    return (formControl: AbstractControl): ValidationErrors | null => {

      const firstPassword = formControl.get(password)?.value;
      const secondPassword = formControl.get(confirm)?.value;

      if (firstPassword !== secondPassword) {
        formControl.get(confirm)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formControl.get(confirm)?.setErrors(null);
      return null;
    }
  }
}
