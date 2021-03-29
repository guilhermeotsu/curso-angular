import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutosDashboardComponent } from "../produtos/produtos-dashboard/produtos-dashboard.component";
import { ProdutoDetalheComponent } from "../componentes/produto-card.component";
import { ProdutoCounterComponent } from "../componentes/produto-counter.component";

import { ProdutosRoutingModule } from "../produtos/produtos.router";

// Formataçao de moedas para real
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutosDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCounterComponent
    ],
    imports:[
        CommonModule,
        ProdutosRoutingModule
    ],
    exports: [

    ]
})
export class ProdutosModule{}
