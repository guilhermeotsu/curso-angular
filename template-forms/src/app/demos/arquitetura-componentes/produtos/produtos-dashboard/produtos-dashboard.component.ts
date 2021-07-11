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
        console.log('teste')
        this.produtos = this.route.snapshot.data["produtos"]
    }

    ngAfterViewInit(): void {
        let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');

        this.teste('teste teste',   0)
        this.teste('teste teste',      0)
        this.teste('teste teste',          0)
        this.teste('teste teste',                  0)
        this.teste('teste teste',                      0)
        this.teste('teste teste',                                  0)

        clickTexto.subscribe(() => {
            console.log('teste')
            alert('texto clicado')
            return;
        })
    }

    teste(event: any, index: any) {
        console.log(event, index)
    }

    mudarStatus(event: Produto) {
        console.log('batendo aqui')
        console.log('')
        event.ativo = !event.ativo;
    }
}
