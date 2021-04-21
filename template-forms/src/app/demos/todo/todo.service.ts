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
}