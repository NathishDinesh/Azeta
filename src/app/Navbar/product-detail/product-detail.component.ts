import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';   // used if component is standalone
import { RouterModule } from '@angular/router';
import { ALL_PRODUCTS, Product } from '../../../product-data';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('DEBUG: route id =', id);
    // type the find param to avoid implicit any
    this.product = ALL_PRODUCTS.find((p: Product) => p.id === id);
    console.log('DEBUG: found product =', this.product);
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
