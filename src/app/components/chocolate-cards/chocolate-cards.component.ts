import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chocolate-cards',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './chocolate-cards.component.html',
  styleUrl: './chocolate-cards.component.css'
})
export class ChocolateCardsComponent {
  chocolates = [
    {
      name: 'Dark Belgian Bliss',
      image: '/assets/chocolates/dark.jpg' ,
      description: 'Rich and smooth 70% cocoa dark chocolate crafted for true connoisseurs.'
    },
    {
      name: 'Hazelnut Delight',
      image: '/assets/chocolates/hazlenut.jpg',
      description: 'Velvety milk chocolate infused with roasted hazelnut pieces for a nutty twist.'
    },
    {
      name: 'Classic Milk Cream',
      image: '/assets/chocolates/milk.jpg',
      description: 'Creamy milk chocolate with a silky texture and perfect sweetness balance.'
    }
  ];
}
