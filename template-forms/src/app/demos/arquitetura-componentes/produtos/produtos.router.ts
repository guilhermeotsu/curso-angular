import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutosDashboardComponent } from "../produtos/produtos-dashboard/produtos-dashboard.component";
import { ProdutoEditarComponent } from "../produtos/produto-editar/produto-editar.component";
import { ProdutoAppComponent } from "../produtos/produto.app.component";

export const produtosRoutingConfig: Routes = [
    { path: '', component: ProdutoAppComponent, 
        children: [
            { path: '', component: ProdutosDashboardComponent, },
            { path: 'editar/:id', component: ProdutoEditarComponent }
        ] 
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(produtosRoutingConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutosRoutingModule{}
