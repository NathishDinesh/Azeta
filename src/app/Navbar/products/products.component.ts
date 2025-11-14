import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ Gives access to *ngFor, *ngIf
import { RouterModule } from '@angular/router';   // ✅ Optional: for routerLink if used

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],  // ✅ Must include CommonModule for *ngFor
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  couverture = [
    { name: '100% Dark Couverture', desc: 'Intense dark flavour', image: '/assets/chocolates/couvert.jpeg' },
    { name: '75% Dark Couverture', desc: 'Per-fermentation to perfection', image: '/assets/chocolates/couvert.jpeg'},
    { name: '65% Dark Couverture', desc: 'Easy, natural reveries', image: '/assets/chocolates/couvert.jpeg'},
    { name: '55% Dark Couverture', desc: 'Bold, bittersweet taste', image: '/assets/chocolates/couvert.jpeg' }
  ];

  cacao = [
    { name: 'Cacao chocolate Butter', desc: 'Pure unprocessed cacao', image: '/assets/chocolates/glassjar3.png' },
    { name: 'Cacao chocolate Powder', desc: 'Rich, natural essence', image: '/assets/chocolates/glassjar1.png' },
    { name: 'Cacao chocolate Nibs', desc: 'Crunchy roasted nibs', image: '/assets/chocolates/glassjar2.png' }
  ];

  signature = [
    { name: 'Intense Dark Chocolate', desc: 'Velvety smooth with nuts', image: '/assets/chocolates/milk.jpg' },
    { name: 'Zesty Orange Chocolate', desc: 'Silky sweet indulgence', image: '/assets/chocolates/milk.jpg' },
    { name: ' Coconut Milk Chocolate', desc: 'Bittersweet harmony', image: '/assets/chocolates/milk.jpg' }
  ];
}
