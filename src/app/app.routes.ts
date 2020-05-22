import { RouterModule, Routes } from '@angular/router';


import { CardsComponent } from './components/cards/cards.component';
import { DescriptionPokemonComponent } from './components/description-pokemon/description-pokemon.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';

const routes: Routes = [
  { path: 'Home', component: GridCardsComponent },
  { path: 'description/:id', component: DescriptionPokemonComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' },
];

export const appRouting = RouterModule.forRoot(routes);
