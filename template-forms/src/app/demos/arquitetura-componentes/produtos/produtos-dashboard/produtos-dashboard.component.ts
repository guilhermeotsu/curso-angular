import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from '../../models/produtos';

@Component({
    selector: 'app-produtos-dashboard',
    templateUrl: './produtos-dashboard.component.html',
    styles: []
})
export class ProdutosDashboardComponent implements OnInit, AfterViewInit {

    produtos: Produto[];

    @ViewChild('teste', { static: false}) mensagemTela: ElementRef

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
    ngAfterViewInit(): void {
        let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');

        clickTexto.subscribe(() => {
            alert('texto clicado')
            return;
        })
    }

    mudarStatus(event: Produto) {
        console.log('batendo aqui')
        event.ativo = !event.ativo;
    }
}
