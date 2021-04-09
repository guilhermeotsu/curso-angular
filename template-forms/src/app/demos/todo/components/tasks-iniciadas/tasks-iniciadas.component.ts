import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../todo.service';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styles: []
})
export class TasksIniciadasComponent implements OnInit {

  todos$: Observable<any[]>

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.todos$ = this.taskService.todos$;
  }
}
