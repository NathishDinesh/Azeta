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
    this.router.navigate(['/about']);
  }

  openProducts() {
    this.router.navigate(['/products']);
  }
  openContact(){
    this.router.navigate(['/contact']);
  }
   navigate(path: string) {
    // small guard: if already on same route, still navigate to trigger refresh if needed
    this.router.navigateByUrl(path);
  }
  

}
