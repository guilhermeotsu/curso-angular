import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CriarContaComponent } from "./criar/criar-conta.component";
import { LoginComponent } from "./login/login.component";

export const contasRoutesConfig: Routes = [ 
  { path: '',  component: LoginComponent },
  { path: 'criar-conta', component: CriarContaComponent }
]

@NgModule({
  imports:[
    RouterModule.forChild(contasRoutesConfig)
  ],
  exports: [
    RouterModule
  ]
})

export class ContasRouterComponent {  }
