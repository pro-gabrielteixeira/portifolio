import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  fullText: string = "Welcome to my portifolio!\nI'm Gabriel Araújo,\nFull Stack Developer.";
  displayText: string = "";

  ngOnInit() {
    this.typeText();
  }

  typeText(index: number = 0): void {
    if (index < this.fullText.length) {
      this.fullText.charAt(index) == '\n' ? this.displayText += '<br>' : this.displayText += this.fullText.charAt(index);
      const span = document.getElementById('type-text');
      if (span) {
        span.innerHTML = this.displayText;
      }
      setTimeout(()=> this.typeText( index + 1), 50);
    }
  }
}
