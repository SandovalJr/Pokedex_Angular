import { Component, OnInit, Input } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  // Input se encarga de conectar el elemento padre con el elemento input
  @Input() pokemonInput: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // console.log(this.pokemonInput);
  }

  GoToDescription(id: number) {
    console.log(id);
    this.router.navigate(['description', id]);
  }
}
