import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Task } from "./task";
import { Store } from "./todo.store";

@Injectable()

export class TaskService { 
    
    todos$: Observable<Task[]> = this.http.get<Task[]>("http://localhost:3000/todolist")
                .pipe(tap(next => this.store.set('todolist', next))); // Pupulando a store com o serviço 

    // Para usar via Injecao de dependecia é necessario registrar no modulo
    constructor(private http: HttpClient, private store: Store) { }

    // Jeito "tradicional" de fazer
    getTodos() : Observable<Task[]> {
        return this.http.get<Task[]>("http://localhost:3000/todolist")
    }
    
    // Adicionando dentro do servico pois ira alterar no backend
    // E a store apenas le daqui
    toggle(event: any) {
        this.http
        .put(`http://localhost:3000/todolist/${event.task.id}`, event.task) // Esse event foi criado dentro de todo-list.component com o método emit de um EventEmitter
        .subscribe(() => {
            // Atualizando os dados da store
            const value = this.store.value.todolist;
            
            const todoList = value.map((task: Task) => {
                return event.task.id === task.id ?
                    { ...task, ...event.task } :
                    task
            })

            this.store.set('todolist', todoList);
        });
    }   
}