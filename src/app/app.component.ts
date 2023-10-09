import { Component } from '@angular/core';
import { CategoriesComponent } from './views/categories/categories.component';
import { TasksComponent } from './views/tasks/tasks.component';

@Component({
  standalone: true,
  imports: [CategoriesComponent, TasksComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'todo';
}
