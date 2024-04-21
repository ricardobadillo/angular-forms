// Angular.
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';



@Directive({
  selector: '[appCustomLabel]'
})
export class CustomLabelDirective implements OnInit {

  private _errors: ValidationErrors | null = null;
  private htmlElement?: ElementRef<HTMLElement>;
  private initialColor = 'red';

  @Input()
  public set color(value: string) {
    this.initialColor = value;
    this.setStyle();
  }

  @Input()
  public set errors(value: ValidationErrors | null) {
    this._errors = value;
    this.setErrorMessage();
  }


  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement.nativeElement.style.color = this.initialColor;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required'))  {
      this.htmlElement.nativeElement.innerText = 'El email es obligatorio';
      this.htmlElement.nativeElement.style.color = 'red';
      return;
    }

    if (errors.includes('minlength'))  {
      const current = this._errors!['minlength']['actualLength'];
      const min = this._errors!['minlength']['requiredLength'];

      this.htmlElement.nativeElement.innerText = `Mínimo ${current} / ${ min } caracteres`;
      this.htmlElement.nativeElement.style.color = '#FFD300';
      return;
    }

    if (errors.includes('pattern'))  {
      this.htmlElement.nativeElement.innerText = 'No tiene formato de email';
      this.htmlElement.nativeElement.style.color = '#FF9F00';
      return;
    }

    if (errors.includes('emailExiste'))  {
      this.htmlElement.nativeElement.innerText = 'El email ya existe';
      this.htmlElement.nativeElement.style.color = '#00913F';
      return;
    }
  }
}
