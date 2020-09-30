import { Injectable } from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  countId = 6;
  products: Array<IProduct> = [
    {
      id: 1, name: 'iphone', description: 'dt'
    },
    {
      id: 2, name: 'samsung', description: 'dt'
    },
    {
      id: 3, name: 'opplo', description: 'dt'
    },
    {
      id: 4, name: 'sony', description: 'dt'
    },
    {
      id: 5, name: 'lg', description: 'dt'
    },
    {
      id: 6, name: 'bphone', description: 'dt'
    },
  ];

  constructor() { }

  findAll(): Array<IProduct> {
    return this.products;
  }

  findProductById(id: number): IProduct {
    return this.products.find(product => product.id === id);
  }

  updateProduct(product: IProduct) {
    this.products.forEach(p => {
      if (p.id === product.id) {
        p = product;
      }
    })
    console.log(this.products);
    console.log(this.products.length);
  }

  createProduct(product: IProduct) {
    this.countId++;
    product.id = this.countId;
    this.products.push(product);
  }

  deleteProduct(product: IProduct) {
    this.products.forEach((item, index) => {
      if (item === product) {
        this.products.splice(index, 1);
      }
    })
    console.log(this.products);
  }

}
