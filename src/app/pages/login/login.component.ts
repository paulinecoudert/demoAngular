import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      //email
      'email' : new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(255)

      ])),
      //password
      'password' : new FormControl(null, Validators.compose([
        Validators.required,
      ])),
    });
  }
  submit(){
    if(this.fg.valid){
    //envoyer le formulaire

    }
    else{
      //on affiche une erreur
    }
  }

  validate(controlName: string){
      const control = this.fg.get(controlName);
        if(control.untouched){
        return 'primary';
        }
          else if(control.valid && control.dirty){
            return 'succes';
          }
            return 'danger';
  }
  
}
