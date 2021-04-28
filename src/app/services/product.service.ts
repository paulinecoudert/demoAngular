import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'http://khun.somee.com/api/product/';

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get<ProductModel[]>(this.url);
  }

  add(produit : ProductModel){
    return this.http.post(this.url, produit);
  }
}
