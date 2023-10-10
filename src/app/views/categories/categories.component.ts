import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Category } from 'src/app/model/Category';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  
  constructor(private dataHandler: DataHandlerService) {
  }

  // Метод вызывается автоматически после инициализации компонента
  ngOnInit(): void {
      this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
      this.dataHandler.fillTasksByCategory(category);
  }
}
