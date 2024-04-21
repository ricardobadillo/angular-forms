// Angular.
import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';



@Directive({
    selector: '[appCustomMin][ngModel]',
    providers: [
      {
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
      }
    ]
})
export class CustomMinDirective implements Validator {

  @Input() public minimo!: number;

  public validate(control: FormControl<number>): ValidationErrors | null {
    const inputValue = control.value;

    return (inputValue < this.minimo)
        ? { 'error': true }
        : null;
  }
}
