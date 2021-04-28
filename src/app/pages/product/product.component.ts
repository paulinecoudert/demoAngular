import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   model: ProductModel[];

  constructor(
    private productService: ProductService 
  ) { }

  ngOnInit(): void {
    this.productService.get().subscribe(data => this.model = data);
  }

}
