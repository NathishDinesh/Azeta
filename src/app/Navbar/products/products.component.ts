import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  couverture = [
    { id: 'couv-70', name: '75% Dark Couverture', image: '/assets/chocolates/couvertHome.png' },
    { id: 'couv-55', name: '55% Dark Couverture', image: '/assets/chocolates/couvert55.png' },
    { id: 'couv-45', name: '45% Dark Couverture', image: '/assets/chocolates/couvert45.png' },
    { id: 'couv-36', name: '36% Milk Couverture', image: '/assets/chocolates/couvert45.png' }
  ];

  cacao = [
    { id: 'cacao-butter', name: 'Cacao Butter', image: '/assets/chocolates/cacaoHome.png' },
    { id: 'cacao-powder', name: 'Cacao Powder', image: '/assets/chocolates/cacaoHome.png' }
  ];

  // Smooth-scroll helper
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // optionally adjust for sticky header offset:
    // window.scrollBy(0, -80);
  }
}
