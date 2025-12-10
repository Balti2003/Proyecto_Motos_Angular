import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/products';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  /* styleUrl: './home.css', */
})
export class Home implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //obtener los primeros 3 productos como destacados para la home
    this.featuredProducts = this.productService.getProducts().slice(0, 3);
  }
}
