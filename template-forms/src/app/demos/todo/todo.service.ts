import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "./task";

@Injectable()

export class TaskService { 
    
    todos$: Observable<Task[]> = this.http.get<Task[]>("http://localhost:3000/todolist");

    // Para usar via Injecao de dependecia é necessario registrar no modulo
    constructor(private http: HttpClient) { }

    // Jeito "tradicional" de fazer
    getTodos() : Observable<Task[]> {
        return this.http.get<Task[]>("http://localhost:3000/todolist");
    }
}