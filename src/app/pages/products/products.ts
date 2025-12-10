import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  /* styleUrl: './products.css', */
})
export class Products {
  productos: Product[] = [];

  constructor(private product: ProductService) {
    this.productos = this.product.getProducts();
  }

  //metodo para buscar
  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.productos = this.product.getProducts().filter(product => product.nombre.toLowerCase().includes(query.toLowerCase()));
  }

  //metodo para filtrar
  onFilterChange(event: Event) {
    const filter = (event.target as HTMLSelectElement).value;
    this.productos = this.product.getProducts().filter(product => product.nombre.toLowerCase().includes(filter.toLowerCase()));
  }
}
