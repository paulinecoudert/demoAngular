import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { NbToastrService } from '@nebular/theme';
import { MessageModel } from 'src/app/models/message.model';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

  content: string;

  messages : MessageModel[];

  constructor(
    private db: AngularFireDatabase,
    private toastr: NbToastrService,
  ) { }

  ngOnInit(): void {
    this.db.object<MessageModel[]>('messages').valueChanges().subscribe(data => {
      let list  = (data  || []).filter(x => x);
      if(this.messages){
        //si les messages sont initialisés
      let newMessage = list[list.length-1];
        if(newMessage.auteur !== 'Toto et ses potes'){
          // on ajoute le dernier message
        this.messages.push(newMessage); //recuperation du dernier message et de l'ajouter à ma liste dans le cas ou je ne suis pas l'auteur
        this.toastr.info("Vous avez reçu un message de la part de " + newMessage.auteur, "Nouveau message !!!");
      }

        
      }  
      else{
        //on initialise les messages
        this.messages = list;
      }
    }); 
    //.filter(x => x) permet de ne plus avoir la valeur null qui s'affiche
    // si pas d'info on inititalise sur une liste vide []
  }

  send(event){

    this.messages.push({
      auteur: 'Toto et ses potes',
      contenu: event.message,
      date: Date.now()
    });
    this.db.object('messages').set(this.messages);
  }



}
