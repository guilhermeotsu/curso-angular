import { Injectable } from '@angular/core'
import { Produto } from '../models/produtos'

@Injectable()
export class ProdutoService {
    produtos: Produto[];

    constructor() {
        this.produtos = [
            {
                id: 1,
                nome: 'Teste',
                ativo: true,
                valor: 100,
                imagem: 'celular.jpg'
            },
            {
                id: 2,
                nome:'Teste 2',
                ativo: true,
                valor: 200,
                imagem: 'gopro.jpg'
            },
            {
                id: 3,
                nome:'Teste 3',
                ativo: true,
                valor: 300,
                imagem: 'mousepad.jpg'
            },
            {   
                id: 4,
                nome:'Teste 4',
                ativo: true,
                valor: 500,
                imagem: 'monitor.jpg'
            },
            {
                id: 5,
                nome:'Teste 5',
                ativo: true,
                valor: 600,
                imagem: 'teclado.jpg'
            }
        ]
    }

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterPorId(id: number): Produto {
        return this.produtos.find(p => p.id == id);
    }
}
