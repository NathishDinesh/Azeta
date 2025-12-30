import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router,private title: Title, private meta: Meta) {
      this.title.setTitle('Azeta | Bean-to-Bar Chocolates & Cacao from Pollachi');
  this.meta.updateTag({
    name: 'description',
    content: 'Azeta crafts bean-to-bar chocolate in Pollachi using cacao from our own farms.'
  });
  }
  openAbout() {
    this.router.navigate(['/about'],{fragment:'beanFermentation'});
  }

 openCouverture() {
  this.router.navigate(['/products'], { fragment: 'couverture' });
}
openCacao() {
  this.router.navigate(['/products'], { fragment: 'cacao' });
}
 openCoating() {
  this.router.navigate(['/products'], { fragment: 'coatings' });
}
 openFillings() {
  this.router.navigate(['/products'], { fragment: 'fillings' });
}
  openContact(){
    this.router.navigate(['/contact'],{fragment:'contactPage'});
  }
  openStory() {
  this.router.navigate(['/about'], { fragment: 'storySection' });
}
openSustainFarm(){
  this.router.navigate(['/about'], { fragment: 'sustainFarm' });
}

}
