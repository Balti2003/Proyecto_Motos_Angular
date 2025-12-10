import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { ProductService } from '../../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productos: Product[] = [];

  constructor(private product: ProductService) {
    this.productos = this.product.getProducts();
  }
}
