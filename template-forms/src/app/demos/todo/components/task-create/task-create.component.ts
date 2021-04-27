import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../task';
import { TaskService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'task-create',
  templateUrl: './task-create.component.html',
  styles: [
    '.button-create { background-color: #552075!important, color: white }'
  ]
})
export class TaskCreateComponent implements OnInit {
  
  todos$: Observable<any>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  createTask(nameTask: string) {
    const task = { nome: nameTask, finalizado: false, iniciado: false } as Task;

    this.taskService.createTask(task);
  }
}
