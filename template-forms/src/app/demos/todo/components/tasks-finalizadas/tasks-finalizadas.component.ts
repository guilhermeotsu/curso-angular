import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styles: []
})
export class TasksFinalizadasComponent implements OnInit {

  todos$: Observable<any[]>;

  constructor(private taskService: TaskService, private store: Store) { }

  ngOnInit() {
    this.todos$ = this.store.getTodoList().pipe(map(store => store.filter(task => task.finalizado)));
  }
}
