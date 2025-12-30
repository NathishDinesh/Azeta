import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}
 openProducts() {
  this.router.navigate(['/products'], { fragment: 'couverture' });
}
openAbout() {
  this.router.navigate(['/about'], { fragment: 'storySection' });
}
openContact(){
    this.router.navigate(['/contact'],{fragment:'contactPage'});
  }
  openHome() {
    this.router.navigate(['/'],{fragment:'homeSection'});
  }
} 