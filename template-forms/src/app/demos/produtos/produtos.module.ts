import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutosDashboardComponent } from "./produtos-dashboard/produtos-dashboard.component";
import { ProdutosRoutingModule } from "./produtos.router";

@NgModule({
    declarations: [
        ProdutosDashboardComponent
    ],
    imports:[
        CommonModule,
        ProdutosRoutingModule
    ],
    exports: [

    ]
})
export class ProdutosModule{}