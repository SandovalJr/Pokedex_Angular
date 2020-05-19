import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRouting } from './app.routes';
/*****
Components
******/
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './components/cards/cards.component';
/*****
MATERIAL COMPONENTS ANGULAR
******/
import { MatSliderModule } from '@angular/material/slider';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DescriptionPokemonComponent } from './components/description-pokemon/description-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CardsComponent,
    DescriptionPokemonComponent,
  ],
  imports: [
    appRouting,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
