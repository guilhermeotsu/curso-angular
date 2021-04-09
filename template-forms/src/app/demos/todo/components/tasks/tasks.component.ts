import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../todo.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit {

  todos$: Observable<any[]>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.todos$ = this.taskService.todos$;
  }
}
