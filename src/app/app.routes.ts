import { RouterModule, Routes } from '@angular/router';


import { CardsComponent } from './components/cards/cards.component';
import { DescriptionPokemonComponent } from './components/description-pokemon/description-pokemon.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import {BusquedaComponent} from './components/busqueda/busqueda.component'
const routes: Routes = [
  { path: 'Home', component: GridCardsComponent },
  { path: 'description/:id', component: DescriptionPokemonComponent },
  {path:'buscar',component:BusquedaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'Home' },
];

export const appRouting = RouterModule.forRoot(routes);
