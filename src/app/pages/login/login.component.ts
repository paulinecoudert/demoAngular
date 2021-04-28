import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg: FormGroup

  constructor(
    private toastr : NbToastrService,
    private router : Router,
  ) { }

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
    let value= this.fg.value; //propriété qui permet de récupérer les valeurs (serialisation d'un objet jason)
    
      if(value.email === 'paulinecoudert@gmail.com' && value.password === '1234'){
      //afficher message Ok
      this.toastr.info('OK');
      //stocker dans notre session
      localStorage.setItem('connectedUser', value.email);
      this.router.navigateByUrl('/home');
      }
      else {
      this.toastr.danger('KO');
      }
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
