import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowTitleComponent } from "./components/show-title/show-title.component";
import { CommonModule } from '@angular/common';
import { UsersListComponent } from "./components/users-list/users-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowTitleComponent, CommonModule, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';
}
