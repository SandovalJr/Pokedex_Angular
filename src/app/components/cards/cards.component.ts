import { Component } from '@angular/core';
import { pluck, map, concatMap, switchMap } from 'rxjs/operators';

// http
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  constructor(private http: HttpClient) {
    this.getPokemons();
  }

  public getPokemons() {
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .pipe(
        pluck('results'),
        switchMap((PokemonsArray: any) =>
          from(PokemonsArray).pipe(
            pluck('url'),
            concatMap((url: string) => this.http.get(url))
          )
        )
      )
      .subscribe(
        pokemons => console.log(pokemons)
      );
  }
}
