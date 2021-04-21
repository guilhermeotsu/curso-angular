import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo.component";
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { HttpClientModule } from "@angular/common/http"
import { TaskService } from "./todo.service";
import { Store } from "./todo.store";

@NgModule({
    imports:[
        CommonModule,
        HttpClientModule
    ],
    declarations:[
        TodoComponent,
        TasksComponent,
        TasksIniciadasComponent,
        TasksFinalizadasComponent,
        TodoListComponent
    ],
    exports: [
        TodoComponent,
        TasksComponent,
        TasksIniciadasComponent,
        TasksFinalizadasComponent,
        TodoListComponent
    ],
    providers: [
        TaskService,
        Store
    ]
})

export class TodoModule {}