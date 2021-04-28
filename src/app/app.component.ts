import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  items: NbMenuItem[] = [
    {title: 'Acceuil', icon: 'home-outline', link: '/home'},
    {title: 'About', icon: 'star', link: '/about'},
    {title: 'Exos', icon: 'book', children: [
      {title: 'Exercice 1 - chat', icon: 'message-circle', link: 'exo/exo1' },
    ]},
    {title: 'liste Produits', icon: 'moon', link: '/product'},
    {title: 'Ajout de Produit', icon: 'sun', link: '/product-add'},
  
  ];

  //2.1 Methode pour changer l'etat du menu
  
  //state : string='compacted';

  // menu(){
  //   if(this.state === 'compacted'){
  //     this.state = 'expanded';
  //   }
  //   else this.state = 'compacted';
  // };


  //2.2 Methode pour changer l'etat du menu definit mes etats du menu
  states: string[] = ['compacted', 'expanded', 'collapsed'];

  current: number = 0;

  get state(): string {
    return this.states[this.current];
  }

  //permet de parcourir la liste des etats sans la dépasser d'où le modulo
  menu() { 
    this.current ++;
    this.current %= this.states.length;

  
  }
}
