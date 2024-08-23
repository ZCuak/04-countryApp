import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  constructor(private countriesService: CountriesService){}

  public countries: Country[] = []

  searchByCapital( term: string): void{
    this.countriesService.searchByCapital( term )
      .subscribe( countries => {
        this.countries = countries;
      } )
  }
}
