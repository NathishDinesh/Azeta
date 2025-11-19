import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}
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
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
        }
      }, 30);
    });
  }
}
