import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() // Recebendo essas tarefas de um componente pai
  list: Task[]

  @Output()
  toggle = new EventEmitter<any>(); // Representação do evento emitido

  toggleItem(index: number, acao: string) {
    const task = this.list[index];

    switch(acao) {
      case 'finalizar':
        task.finalizado = true;
        task.iniciado = false;
        break;
      case 'iniciar':
        task.finalizado = false;
        task.iniciado = true;        
        break;
      case 'retormar':
        task.finalizado = false;
        task.iniciado = true;
        break;
      case 'cancelar':
        task.finalizado = false;
        task.iniciado = false;
        break;
    }

    // Emitindo o evento para o componente pai
    this.toggle.emit({
      task: { ...task }
    })
  }
}
