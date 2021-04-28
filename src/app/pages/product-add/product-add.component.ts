import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
fg: FormGroup;

  constructor(
    private productService : ProductService,
    private toastr : NbToastrService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      'name' : new FormControl(null, Validators.compose([
        Validators.required
      ])),
      'price': new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0),
      ]))
    })
  }

  submit(){
    if(this.fg.valid){
      this.productService.add(this.fg.value).subscribe(() =>{
      this.toastr.info('Enregistrement OK');
      this.router.navigateByUrl('/product');
    });

    }
  }
}
