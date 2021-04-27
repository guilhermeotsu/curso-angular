import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Task } from "./task";
import { Store } from "./todo.store";

@Injectable()

export class TaskService { 
    basePath = "http://localhost:3000/todolist"
    
    todos$: Observable<Task[]> = this.http.get<Task[]>(this.basePath)
                .pipe(tap(next => this.store.set('todolist', next))); // Pupulando a store com o serviço 

    // Para usar via Injecao de dependecia é necessario registrar no modulo
    constructor(private http: HttpClient, private store: Store) { }

    // Jeito "tradicional" de fazer
    getTodos() : Observable<Task[]> {
        return this.http.get<Task[]>(this.basePath)
    }
    
    // Adicionando dentro do servico pois ira alterar no backend
    // E a store apenas le daqui
    toggle(event: any) {
        this.http
        .put(this.basePath + `/${event.task.id}`, event.task) // Esse event foi criado dentro de todo-list.component com o método emit de um EventEmitter
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
    
    createTask(task: Task) {
        this.http
            .post(this.basePath, task)
            .subscribe((data) => {
                this.store.value.todolist.push(data as Task);

                const taskList = this.store.value.todolist;

                this.store.set('todolist', taskList);
            });
    }

    delete(id: number) {
        this.http
            .delete(this.basePath + `/${id}`)
            .subscribe((data) => {
                const tasks = this.store.value.todolist.filter((task) => task.id !== id)

                this.store.set('todolist', tasks);
            })
    }
}