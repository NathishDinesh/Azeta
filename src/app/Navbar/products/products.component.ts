import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CACAO,Coatings,COUVERTURE, Fillings } from '../../../product-data';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private route: ActivatedRoute,private title: Title, private meta: Meta) {
     this.title.setTitle('Products | Azeta Craft Chocolate');
  this.meta.updateTag({
    name: 'description',
    content: 'Explore Azeta’s handcrafted couverture chocolate bars and cacao products.'
  });
  }
 couverture = COUVERTURE;
  cacao = CACAO;
  coatings = Coatings;
  fillings = Fillings;


    ngAfterViewInit() {
    // Wait for DOM to load
    setTimeout(() => {
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, -80);  // adjust for header if needed
          }
        }
      });
    }, 200);
  }
  // Smooth-scroll helper
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // optionally adjust for sticky header offset:
    // window.scrollBy(0, -80);
  }
}
