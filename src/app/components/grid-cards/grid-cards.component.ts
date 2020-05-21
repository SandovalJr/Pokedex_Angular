import { Component } from '@angular/core';
import { pluck, concatMap, switchMap } from 'rxjs/operators';

// http
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css'],
})
export class GridCardsComponent {
  public ArraysPokemon: Array<any> = [];
  public loading: boolean = false;
  private urlApiPokemon = `https://pokeapi.co/api/v2/pokemon`;
  public indicePaginacion = 1;

  constructor(private http: HttpClient) {
    window.scrollTo(0, 0);
    this.getPokemons(this.urlApiPokemon);
  }

  public getPokemons(urlApi) {
    this.ArraysPokemon = [];
    this.loading = true;
    this.http
      .get(urlApi)
      .pipe(
        pluck('results'),
        switchMap((PokemonsArray: any) =>
          from(PokemonsArray).pipe(
            pluck('url'),
            concatMap((url: string) => this.http.get(url))
          )
        )
      )
      .subscribe((pokemons) => {
        this.ArraysPokemon.push(pokemons);
        if (this.ArraysPokemon.length == 20) {
          this.loading = false;
        }
        // console.log(this.ArraysPokemon);
      });
  }

  public paginacionRight() {
    const offset = this.indicePaginacion * 20;
    this.indicePaginacion++;
    const urlActualizado = `${this.urlApiPokemon}?offset=${offset}&limit=20`;
    this.getPokemons(urlActualizado);
    console.log(urlActualizado);
  }

  public paginacionLeft() {
    if (this.indicePaginacion == 1) return;
    this.indicePaginacion--;
    const offset = this.indicePaginacion * 20 - 20;
    const urlAnterior = `${this.urlApiPokemon}?offset=${offset}&limit=20`;
    this.getPokemons(urlAnterior);

    console.log(`url anterior: ${urlAnterior}`);
  }
}
