import { Injectable } from '@angular/core';
import { Product, MOCK_PRODUCTS } from '../data/product-data';

export type { Product } from '../data/product-data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = MOCK_PRODUCTS;

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
