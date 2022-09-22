// Angular.
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  miFormulario: FormGroup = this.formBuilder.group({
    region:     [ '', Validators.required ],
    pais:       [ '', Validators.required ],
    fronteras:  [ '', Validators.required ]
  });

  paises:     Country[] = [];
  regiones:   string[]  = [];
  fronteras:  Country[]  = [];

  loading: boolean = false;

  constructor( 
    private formBuilder: FormBuilder,
    private selectorCountryService: SelectorCountryService 
  ) { }

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