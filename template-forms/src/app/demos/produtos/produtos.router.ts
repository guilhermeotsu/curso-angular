import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutosDashboardComponent } from "./produtos-dashboard/produtos-dashboard.component";


export const produtosRoutingConfig: Routes = [
    { path: '', component: ProdutosDashboardComponent }
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