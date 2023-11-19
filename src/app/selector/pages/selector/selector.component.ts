// Angular.
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormGroup, Form, FormControl } from '@angular/forms';

// Modelos.
import { Country } from '../../models/country';
import { CountryFull } from '../../models/country-full';

// RXJS.
import { switchMap, tap } from 'rxjs/operators';

// Servicios.
import { SelectorCountryService } from '../../services/selector-country.service';



@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  miFormulario: FormGroup<{
    region: FormControl<string>;
    pais: FormControl<string>;
    fronteras: FormControl<string>;
  }>

  paises:     Country[] = [];
  regiones:   string[]  = [];
  fronteras:  Country[]  = [];

  loading: boolean = false;


  constructor(private formBuilder: UntypedFormBuilder, private selectorCountryService: SelectorCountryService ) {
    this.miFormulario = this.formBuilder.group({
      region: new FormControl('', { nonNullable: true, validators: [ Validators.required ] }),
      pais: new FormControl('', { nonNullable: true, validators: [ Validators.required ] }),
      fronteras: new FormControl('', { nonNullable: true, validators: [ Validators.required ] }),
    });
  }

  ngOnInit(): void {
    this.regiones = this.selectorCountryService.regiones;

    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap(() => {
          this.miFormulario.get('pais')?.reset('');
          this.loading = true;
        }),
        switchMap((region: string) => this.selectorCountryService.getCountriesForRegion(region))
      ).subscribe((paises: Country[]) => {
        this.loading = false;
        this.paises = paises
      });

    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(() => {
          this.fronteras = [];
          this.miFormulario.get('fronteras')?.reset('');
          this.loading = true;
        }),
        switchMap((code: string) => this.selectorCountryService.getCountryForAlphaCode(code)),
        switchMap((pais: CountryFull | null) => this.selectorCountryService.getCountriesByBorders(pais?.borders!)))
        .subscribe((paises: Country[]) => {
          this.fronteras = paises;
          this.loading = false;
      });
  };

  saveData(): void {
    console.log(this.miFormulario.value);
  };
}
