import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'
import { TASKS } from '../../mock-tasks'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  tasks: Task[] = TASKS;

  constructor(private tasksService: TaskService) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

}
