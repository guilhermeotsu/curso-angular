import { Component, Input } from "@angular/core";
import { Produto } from "../models/produtos";

@Component({
    selector: 'produto-counter',
    template: 
        `
            <div>
                <p>Ativos: {{ contadorAtivos() }} de {{ produtos.length }} </p>
            </div>
        `
})

export class ProdutoCounterComponent {
    @Input()
    produtos: Produto[]

    contadorAtivos(): number {
        if(!this.produtos) return;

        return this.produtos.filter((prod: Produto) => prod.ativo).length;
    }
}