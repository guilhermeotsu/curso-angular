import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "./task";
import { map } from "rxjs/operators"

export interface State {
    todolist: Task[]
}

const state: State = {
    todolist: []
}

export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value() {
        // Formato de estado, nao é o valor do object Task[]
        return this.subject.value;
    }

    // Método para utilizar ele ao inves do serviço todo.service
    // O todo.service vai popular a store para que ela seja usada nos componentes
    public getTodoList() : Observable<Task[]> {
        // store é uma observable, mas precisamos tratar ela para que retorna o valor das Task em si
        return this.store
            .pipe(map(todo => todo.todolist))
    }

    // Atualiza o estado atual da store
    set(name: string, state: any) {
        // Propaga a informaçao que esta em this.value para o state
        // E o name é a propriedade para encontrar o valor
        this.subject.next({
            ...this.value, [name]: state
        })
    }
}