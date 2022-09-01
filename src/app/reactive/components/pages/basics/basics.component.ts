// Angular.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  /*
    ! Formulario de manera manual.
    miFormulario: FormGroup = new FormGroup({
      producto: new FormControl('Galletas'),
      precio: new FormControl(1),
      existencia: new FormControl(10)
    });
  */

  miFormulario: FormGroup = this.fb.group({
    producto: [ , [
      Validators.required,
      Validators.minLength(3)
    ] ],
    precio: [ , [
      Validators.required,
      Validators.min(0)
    ] ],
    existencia: [ , [
      Validators.required,
      Validators.min(0)
    ] ]
  });

  ngOnInit(): void {
    /*
      this.miFormulario.setValue({
        producto: 'Galletas',
        precio: 1,
        existencia: 10
      });
    */
  }

  constructor( private fb: FormBuilder ) { }

  validarCampo( campo: string ) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }
  
  saveData() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario);
    this.miFormulario.reset();
  }
}
