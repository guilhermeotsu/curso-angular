import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produtos';

@Component({
    selector: 'app-produtos-dashboard',
    templateUrl: './produtos-dashboard.component.html',
    styles: []
})
export class ProdutosDashboardComponent implements OnInit {

    produtos: Produto[];

    constructor() { }

    ngOnInit() {
        this.produtos = [
            {
                id: 1,
                nome: 'Teste 1',
                ativo: true,
                imagem: 'celular.jpg',
                valor: 100
            },
            {
                id: 2,
                nome: 'Teste 2',
                ativo: true,
                imagem: 'gopro.jpg',
                valor: 100
            },
            {
                id: 3,
                nome: 'Teste 3',
                ativo: false,
                imagem: 'mouse.jpg',
                valor: 100
            }
        ]
    }

    mudarStatus(event: Produto) {
        console.log('batendo aqui')
        event.ativo = !event.ativo;
    }
}
