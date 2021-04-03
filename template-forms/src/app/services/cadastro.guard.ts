import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CadastroComponent } from "../demos/reactiveForms/cadastro/cadastro.component";

Injectable()

export class CadastroGuard implements CanDeactivate<CadastroComponent> {

    canDeactivate(cadastro: CadastroComponent)  {
        if(cadastro.cadastroSujo) {
            return window.confirm('Tem certeza que deseja sair do formulário?')
        }

        return true;
    }
}