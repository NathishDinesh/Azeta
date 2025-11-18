import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // ✅ include required modules
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
   constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }
   ngAfterViewInit() {
    // read the fragment once the view is ready and scroll smoothly
    this.route.fragment.subscribe(fragment => {
      if (!fragment) return;
      // tiny delay ensures elements are rendered (images/fonts won't shift us after scroll)
      setTimeout(() => {
        const el = document.getElementById(fragment);
        if (el) {
          // scroll into view smoothly
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // optional: if you have a sticky header, offset slightly:
          // const headerOffset = 80;
          // const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          // window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
        }
      }, 30);
    });
  }
}
