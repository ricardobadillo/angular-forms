// Angular.
import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';



@Directive({
    selector: '[appCustomMin][ngModel]',
    providers: [{
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true
    }]
})
export class CustomMinDirective implements Validator {

  @Input() minimo!: number;


  constructor() { }

  validate(control: FormControl<number>): { error: boolean } | null {
    const inputValue = control.value;

    return (inputValue < this.minimo)
        ? { 'error': true }
        : null;
  }
}
