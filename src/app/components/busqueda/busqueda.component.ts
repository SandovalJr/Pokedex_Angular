import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, take, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit, AfterViewInit {
  private url = `https://pokeapi.co/api/v2/pokemon/`;

  public pokemonRecibido: any;
  public loading: boolean = true;

  // es igual que hacer document.getElementById
  /*****
  estructura:
  viewChild (el id) nombre de el elemento: tipo de elemento
  ******/
  @ViewChild('inputSearch') inputSearch: ElementRef;

  /*****
  Constructor : funcion que se ejecuta cuando se instancia el componente
  - El componente se instancia cuando usamos su etiqueta
  ******/
  constructor(private http: HttpClient) {}

  /*****
  ngOnInit: Funcion que se ejecuta despues del constructor y cuando se terminan de crear html y css
  si tengo un metodo  que haga referencia a una etiqueta html , se necesita poner aqui.
  Debido a que si se coloca en el constructor marcara error por que el elemento no existe
  - solo se instancian los inputs y outputs
  ******/
  ngOnInit(): void {}

  /*****
// ng after viw init: es un metodo que se ejecuta despues del ngOnInit
  // su objetivo es verificar que los elementos ya esten renderizados 
  // la diferencia que tiene el nfAfter y el ngOnInit es que after espera a que sus elementos
  // esten renderizados y el ngOnInit solo espera a que angular los haya cocstruido
  // en su logica pero sin renderizarlos, por lo tanto es necesario establecer todo lo que
  // tenga que ver con viewchild  debido a que este decorados, busca la referencia del ID
  // en el DOM y no enn la logica de angular
  ******/
  ngAfterViewInit(): void {
    this.searchPokemon();
  }

  /*****
  Metodo que nos ayudara a obtener la informacion de la API , con el pokemon que busquemos por medio de RXJS
  ******/

  searchPokemon() {
    fromEvent(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        debounceTime(1500),
        pluck('target', 'value'),
        switchMap((nombrePokemon) =>
          this.http.get(`${this.url}${nombrePokemon}`)
        )
      )
      .subscribe(
        (value) => {
          this.pokemonRecibido = value;
          this.loading = false;
        },

        (error) => this.searchPokemon()
      );
  }
}
