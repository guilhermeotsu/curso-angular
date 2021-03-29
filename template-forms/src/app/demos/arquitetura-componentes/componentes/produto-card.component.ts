import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Produto } from "../models/produtos";

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card.component.html'
})

export class ProdutoDetalheComponent {
    
    // Recebendo objeto do componente pai
    @Input()
    produto: Produto;

    @Output()
    status: EventEmitter<any> = new EventEmitter();

    mudarStatus() {
        this.status.emit(this.produto);
    }
}