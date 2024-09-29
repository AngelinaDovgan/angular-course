import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowTitleComponent } from "./components/show-title/show-title.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowTitleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';
  isComponentVisible: boolean = true;

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
