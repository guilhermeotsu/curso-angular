import { Component, OnInit } from '@angular/core';
import { BarSerivce } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    { provide: BarSerivce, useClass: BarSerivce } // Nessa abordagem a dependecia só está resolvida nesse compoente, nao esta resolvida globalmente. Para isso precisaria registrar em app.module.ts
  ]
})
export class BarComponent implements OnInit {

  bebidas: string;

  constructor(private barService: BarSerivce) { }

  ngOnInit() {
    this.bebidas = this.barService.obterBebidas();
  }

}
