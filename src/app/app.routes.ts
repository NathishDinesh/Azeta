import { Routes } from '@angular/router';
import { ProductsComponent } from './Navbar/products/products.component';
import { HomeComponent } from './Navbar/home/home.component';
import { AboutComponent } from './Navbar/about/about.component';
import { ContactComponent } from './Navbar/contact/contact.component';
import { ProductDetailComponent } from './Navbar/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },   // ROOT HOME (SEO)
  { path: 'home', redirectTo: '', pathMatch: 'full' }, // optional backward compatibility

  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product/:id', component: ProductDetailComponent },

  { path: '**', redirectTo: '' } // optional safety
];

