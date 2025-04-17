import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
	@Input() projectName: string = "";
	@Input() projectDescription: string = "";
	@Input() projectURL: string = "";
}
