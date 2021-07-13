import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarContaComponent } from './contas/criar/criar-conta.component';
import {LoginComponent} from './contas/login/login.component';
import { HomeComponent } from './navegacao/home/home.component';
import { NotFoundCompoent } from './navegacao/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'criar-conta', component: CriarContaComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundCompoent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
