// Angular.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';

// RXJS.
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {

  public validate(control: AbstractControl ): Observable<ValidationErrors | null> {

    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {

      if (email === 'ricardo@gmail.com') {
        subscriber.next({ emailExiste: true });
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();
    }).pipe(delay(1000));

    return httpCallObservable;
  }
}
