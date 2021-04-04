import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/arquitetura-componentes/pipes/filmes/filmes.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    { path: 'filmes', component: FilmesComponent },
    { path: 'produtos', loadChildren: () => import('./demos/arquitetura-componentes/produtos/produtos.module').then(p => p.ProdutosModule) }, // Fazendo lazy loading
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(p => p.AdminModule), canLoad: [AuthGuard], canActivate: [AuthGuard] }, // canLoad tem como funcao verificar se deve carregar o modulo para o usuario, canActivate permite que vc baixe o modulo mas verifica se voce pode acessar

    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule {}