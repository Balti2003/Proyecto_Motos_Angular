import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  /* styleUrl: './product-detail.css', */
})
export class ProductDetail implements OnInit{
  producto: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    //obtener el id de la url y buscar el producto
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      const id = idParam ? parseInt(idParam, 10): NaN;

      this.producto = this.productService.getProductById(id);

      //redireccionar si el producto no existe
      if (!this.producto) {
        this.router.navigate(['/productos']);
      }
    });
  }
}
