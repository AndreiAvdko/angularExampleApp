import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})

export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
      this.tasks = this.dataHandler.getTasks();
  }
}
