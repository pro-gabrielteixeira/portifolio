import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component'
import { ProjectsComponent } from './components/projects/projects.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutMeComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';
}
