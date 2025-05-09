import { Component, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  showScrollToTop = false;
  isShrink = false;
  constructor(private renderer: Renderer2) {}
  
  public sectionClick(navSection: string) {
    const isMobile = window.innerWidth <= 864;
    const element = document.getElementById(navSection);
    
    if (element && element != document.getElementById('navbar')) {
      if (this.isShrink) {
        scrollTo({top: 70, behavior: 'smooth'})
      }
      setTimeout(() => {
        if (!isMobile) 
          this.renderer.setStyle(element, 'scroll-margin-top', '6.5rem')
        element.scrollIntoView({ behavior: 'smooth', block: 'start'});
      }, 350)
    } else if (element && element == document.getElementById('navbar')) {
      scrollTo({top: 0, behavior: 'smooth'})
    }
  }

    @HostListener('window:scroll', [])
    onWindowScroll(): void {
      const isMobile = window.innerWidth <= 864;
      const navbar = document.getElementsByClassName('navbar')[0] as HTMLElement;
      
      this.showScrollToTop = (isMobile && window.scrollY > 200);
        
      if (window.scrollY > 40) {
          this.renderer.setStyle(document.getElementById('logo'), 'width', '5rem');
          navbar.classList.add('shrink');
		  this.isShrink = false;
		} else if (window.scrollY < 3) { 
			this.renderer.setStyle(document.getElementById('logo'), 'width', '10rem');
			navbar.classList.remove('shrink');
			this.isShrink = true;
    }

  }
}
