import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TaskService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit, OnDestroy {

  todos$: Observable<any[]>;
  subscription: Subscription;

  constructor(private taskService: TaskService, private store: Store) { }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.todos$ = this.store.getTodoList().pipe(map(store => store.filter(task => !task.finalizado && !task.iniciado)));

    // Populando o fluxo de dados para a store
    // Esse fluxo de dados pode ser chamada em qualquer lugar
    this.subscription = this.taskService.todos$.subscribe();
  }

  // Pegando a emissao do evento criada dentro de todo-list.component
  onToggle(event: any) {
    // Recebendo a mudança de estado já com o estado alterado da tarefa
    this.taskService.toggle(event);
  }
}
