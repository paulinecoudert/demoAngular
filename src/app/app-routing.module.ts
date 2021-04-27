import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { Exercice1Component } from './pages/exercices/exercice1/exercice1.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full'}, // route par default
  { path:'home', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'exo', component: ExercicesComponent, children: [
    {path:'exo1', component: Exercice1Component},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
