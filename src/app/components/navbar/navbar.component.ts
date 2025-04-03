import { Component, Renderer2 } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private renderer: Renderer2) {}

  public sectionClick(navSection: string) {
    const element = document.getElementById(navSection);
    if (element) {
      this.renderer.setStyle(element, 'scroll-margin-top', '80px')
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }
}
