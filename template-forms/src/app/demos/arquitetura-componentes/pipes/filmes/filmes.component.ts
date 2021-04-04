import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styles: []
})
export class FilmesComponent implements OnInit {

  filmes: Filme[];

  constructor() { }

  ngOnInit() {
    this.filmes = [
      {
        nome: 'filme 1',
        dataLancamento: new Date('12/07/1994'),
        imagem: 'sonhoLiberdade.jpg',
        tamanho: '12312321',
        valor: 150.00
      },
      {
        nome: 'filme 2',
        dataLancamento: new Date('10/02/1991'),
        imagem: 'sonhoLiberdade.jpg',
        tamanho: '9398401',
        valor: 250.00
      },
      {
        nome: 'filme 3',
        dataLancamento: new Date('01/10/2001'),
        imagem: 'sonhoLiberdade.jpg',
        tamanho: '1020113192',
        valor: 50.00
      }
    ]
  }
}
