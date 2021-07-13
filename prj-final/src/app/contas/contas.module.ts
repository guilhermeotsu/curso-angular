import { NgModule } from "@angular/core";
import { CriarContaComponent } from "./criar/criar-conta.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  exports:[
    LoginComponent,
    CriarContaComponent
  ],
  declarations: [
    LoginComponent,
    CriarContaComponent
  ],
  imports:[],
})

export class ContasModule {  }
