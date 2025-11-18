import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CACAO,COUVERTURE } from '../../../product-data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 couverture = COUVERTURE;
  cacao = CACAO;

  // Smooth-scroll helper
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // optionally adjust for sticky header offset:
    // window.scrollBy(0, -80);
  }
}
