import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './components/cards/cards.component';
import { DescriptionPokemonComponent } from './components/description-pokemon/description-pokemon.component';

const routes: Routes = [
  { path: 'Home', component: CardsComponent },
  { path: 'description', component: DescriptionPokemonComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' },
];

export const appRouting = RouterModule.forRoot(routes);
