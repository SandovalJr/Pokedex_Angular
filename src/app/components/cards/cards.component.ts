import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  // Input se encarga de conectar el elemento padre con el elemento input
  @Input() pokemonInput: any;


  constructor() {}

  ngOnInit():void {
    // console.log(this.pokemonInput);
  }
}
