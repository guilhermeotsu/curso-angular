import { Injectable } from "@angular/core"

@Injectable()
export class BarSerivce {
    constructor() { }

    obterBebidas(): string {
        return 'Bebidas';
    }

    obterPorcoes(): string {
        return 'Porcoes';
    }

    obterRefeicoes(): string {
        return 'Refeicoes';
    }
}