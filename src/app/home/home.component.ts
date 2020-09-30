import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-index',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listproduct: IProduct[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.listproduct = this.productService.findAll();
  }

}
