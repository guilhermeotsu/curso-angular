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

  // Pegando a emissao do evento criada dentro de todo-list.component
  onToggle(event: any) {
    // Recebendo a mudança de estado já com o estado alterado da tarefa
    this.taskService.toggle(event);
  }
}
