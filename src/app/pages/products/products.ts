import { Component, OnInit, signal } from '@angular/core';
import { Product, ProductService } from '../../services/products';
import { RouterLink } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule], 
  templateUrl: './products.html',
})
export class Products implements OnInit {
  // Array de productos
  private allProducts: Product[] = []; 
  
  // Lista de productos que se muestran en el HTML
  productos = signal<Product[]>([]); 
  
  // Estados de los filtros
  private searchTerm: string = '';
  private selectedBrand: string = '';
  private selectedCategory: string = '';

  // Opciones de filtro para los <select> en el template
  availableBrands: string[] = [];
  availableCategories: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.allProducts = this.productService.getProducts();
    this.extractFilterOptions();
    this.applyFilters();
  }
  
  // Extrae dinámicamente las opciones de filtro de los datos
  private extractFilterOptions(): void {
    this.availableBrands = Array.from(new Set(this.allProducts.map(p => p.marca))).sort();
    this.availableCategories = Array.from(new Set(this.allProducts.map(p => p.categoria))).sort();
  }

  // Maneja la búsqueda de texto
  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.applyFilters();
  }

  // Maneja el cambio en el filtro de Marca
  onBrandChange(event: Event): void {
    this.selectedBrand = (event.target as HTMLSelectElement).value;
    this.applyFilters();
  }
  
  // Maneja el cambio en el filtro de Categoría
  onCategoryChange(event: Event): void {
    this.selectedCategory = (event.target as HTMLSelectElement).value;
    this.applyFilters();
  }

  //Método para resetear todos los filtros
  resetFilters(): void {
    this.searchTerm = '';
    this.selectedBrand = '';
    this.selectedCategory = '';
    
    this.applyFilters();
  }

  // Lógica central de filtrado que combina todos los criterios
  private applyFilters(): void {
    let filtered = this.allProducts;

    // 1. Filtro por término de búsqueda (nombre o descripción)
    if (this.searchTerm) {
      filtered = filtered.filter(p =>
        p.nombre.toLowerCase().includes(this.searchTerm) ||
        p.descripcion.toLowerCase().includes(this.searchTerm)
      );
    }
    
    // 2. Filtro por Marca
    if (this.selectedBrand) {
      filtered = filtered.filter(p => p.marca === this.selectedBrand);
    }
    
    // 3. Filtro por Categoría
    if (this.selectedCategory) {
      filtered = filtered.filter(p => p.categoria === this.selectedCategory);
    }

    // Actualizar la lista visible
    this.productos.set(filtered);
  }
}