// Angular.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Modelos.
import { Country } from '../../models/country';
import { Region } from '../../models/region';

// RXJS.
import { switchMap, tap } from 'rxjs/operators';

// Servicios.
import { SelectorCountryService } from '../../services/selector-country.service';



@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
})
export class SelectorComponent implements OnInit {

  public miFormulario: FormGroup<{
    region: FormControl<string>;
    pais: FormControl<string>;
    fronteras: FormControl<string>;
  }>

  public paises:    Array<Country> = [];
  public regionMap  = { 'Africa': 'África', 'Americas': 'América', 'Asia': 'Asia', 'Europe': 'Europa', 'Oceania': 'Oceanía' };
  public regiones:  Array<Region>  = [];
  public fronteras: Array<Country> = [];
  public loading    = false;


  constructor(private formBuilder: FormBuilder, private selectorCountryService: SelectorCountryService ) {
    this.miFormulario = this.formBuilder.group({
      region: new FormControl('', { nonNullable: true, validators: [ Validators.required ] }),
      pais: new FormControl('', { nonNullable: true, validators: [ Validators.required ] }),
      fronteras: new FormControl('', { nonNullable: true, validators: [ Validators.required ] }),
    });
  }

  ngOnInit(): void {
    this.regiones = this.selectorCountryService.regiones;
    this.onRegionChanged();
    this.onCountryChanged();
  };

  public onRegionChanged(): void {
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap(() => this.miFormulario.get('pais')?.reset('')),
        tap(() => this.loading = true),
        switchMap((region: string) => this.selectorCountryService.getCountriesByRegion(region))
      ).subscribe((paises: Array<Country>) => {
        this.loading = false;
        this.paises = paises
      });
  }

  public onCountryChanged(): void {
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(() => this.fronteras = []),
        tap(() => this.miFormulario.get('fronteras')?.reset('')),
        tap(() => this.loading = true),
        switchMap((alphaCode: string) => this.selectorCountryService.getCountryByAlphaCode(alphaCode)),
        switchMap((country: Country | null) => this.selectorCountryService.getCountriesByBorders(country?.borders!))
      ).subscribe((countries: Array<Country>) => {
          this.fronteras = countries;
          this.loading = false;
        });
  }

  public saveData(): void {
    console.log(this.miFormulario.value);
  };
}
