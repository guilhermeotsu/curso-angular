import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.produtos = this.route.snapshot.data["produtos"]
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
