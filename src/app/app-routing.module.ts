import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AboutComponent } from './pages/about/about.component';
import { Exercice1Component } from './pages/exercices/exercice1/exercice1.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full'}, // route par default
  { path:'home', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'exo', component: ExercicesComponent, children: [
    {path:'exo1', component: Exercice1Component, canActivate: [LoginGuard]},
  ]},
  {path:'login', component: LoginComponent},
  {path:'product', component: ProductComponent},
  {path:'product-add', component: ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
