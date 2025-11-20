import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
  openAbout() {
    this.router.navigate(['/about'],{fragment:'beanFermentation'});
  }

 openCouverture() {
  this.router.navigate(['/products'], { fragment: 'couverture' });
}
openCacao() {
  this.router.navigate(['/products'], { fragment: 'cacao' });
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
