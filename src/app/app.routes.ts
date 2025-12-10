import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'nosotros',
        component: About
    },
    {
        path: 'productos',
        component: Products
    },
    {
        path: 'contacto',
        component: Contact
    },
    {
        path: 'productos/:id',
        component: ProductDetail
    },
    {
       path: '**',
       redirectTo: '' 
    },
];
