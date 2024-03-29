import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutosDashboardComponent } from "../produtos/produtos-dashboard/produtos-dashboard.component";
import { ProdutoDetalheComponent } from "../componentes/produto-card.component";
import { ProdutoCounterComponent } from "../componentes/produto-counter.component";
import { ProdutoAppComponent } from "../produtos/produto.app.component";

import { ProdutosRoutingModule } from "../produtos/produtos.router";

import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';
import { ProdutoService } from "../services/produto.service";
import { ProdutoResolve } from "../services/produto.resolve";


// Formataçao de moedas para real
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutoAppComponent,  
        ProdutosDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCounterComponent,
        ProdutoEditarComponent
    ],
    imports:[
        CommonModule,
        ProdutosRoutingModule
    ],
    providers: [  
        ProdutoService,
        ProdutoResolve
    ],
    exports: [

    ]
})
export class ProdutosModule{}
