import { Component, OnInit } from '@angular/core';
import { BarSerivce, BebidaService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    { provide: BarSerivce, useClass: BarSerivce }, // Nessa abordagem a dependecia só está resolvida nesse compoente, nao esta resolvida globalmente. Para isso precisaria registrar em app.module.ts
    { provide: BarSerivce, useExisting: BebidaService }
  ]
})
export class BarComponent implements OnInit {

  bebidas: string;
  bebida: string;

  constructor(
    private barService: BarSerivce,
    private bebidaService: BebidaService
  ) { }

  ngOnInit() {
    this.bebidas = this.barService.obterBebidas();

    this.bebida = this.bebidaService.obterBebidas(); // Fazendo abstraçao de uma classe e resolvendo provendo um serviço, sem necessariamente implementar essa classe
  }

}
