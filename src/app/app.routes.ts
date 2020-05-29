import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './components/cards/cards.component';
import { DescriptionPokemonComponent } from './components/description-pokemon/description-pokemon.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'Home', component: GridCardsComponent },
  { path: 'description/:id', component: DescriptionPokemonComponent },
  { path: 'buscar', component: BusquedaComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' },
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
