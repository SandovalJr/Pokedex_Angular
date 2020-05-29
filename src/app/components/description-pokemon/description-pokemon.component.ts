import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck, concatMap, switchMap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-description-pokemon',
  templateUrl: './description-pokemon.component.html',
  styleUrls: ['./description-pokemon.component.css'],
})
export class DescriptionPokemonComponent implements OnInit {
  public PokemonsRecibidos: any;
  public descripcion: any;
  public loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.activatedRoute.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.getPokemon(id)),
        switchMap((pokemon) =>
          this.http.get(pokemon.species.url).pipe(
            map((nuevaDataPokemon) => ({
              ...pokemon,
              ...nuevaDataPokemon,
            }))
          )
        )
      )
      .subscribe((pokemon) => {
        this.loading = false;
        this.PokemonsRecibidos = pokemon;
        this.descripcion = this.PokemonsRecibidos.flavor_text_entries.find(
          (descripcion) =>
            descripcion.language.name == 'es' ? descripcion.flavor_text : null
        );
        console.log(this.descripcion);

        console.log(this.PokemonsRecibidos);
      });
  }

  ngOnInit(): void {}

  public getPokemon(id: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
