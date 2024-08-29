import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { IconiquesComponent } from './iconiques/iconiques.component';
import { PiscinesComponent } from './piscines/piscines.component';
import { BordmerComponent } from './bordmer/bordmer.component';
import { ChateauxComponent } from './chateaux/chateaux.component';
import { IlesComponent } from './iles/iles.component';
import { PiedpistesComponent } from './piedpistes/piedpistes.component';

const routes: Routes = [
  {
    path: '',
    component: IconiquesComponent,
    title: 'Home Page'
  },
  {
    path: 'piscines',
    component: PiscinesComponent,
    title: 'Piscines Page'
  },
  {
    path: 'bordmer',
    component: BordmerComponent,
    title: 'bord de mer Page'
  },
  {
    path: 'chateaux',
    component: ChateauxComponent,
    title: 'chateaux Page'
  },
  {
    path: 'iles',
    component: IlesComponent,
    title: 'iles Page'
  },
  {
    path: 'piedpistes',
    component: PiedpistesComponent,
    title: 'Au pied des pistes'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
