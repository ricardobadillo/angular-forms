// Angular.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';

// RXJS.
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {


  constructor( private http: HttpClient ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(1000),
        map(response => {
          return (response.length === 0) ? null : { emailExiste: true }
        })
      );
  };
}
