import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../models/produtos';
import { ProdutoService } from '../../services/produto.service';
import { ProdutosDashboardComponent } from '../produtos-dashboard/produtos-dashboard.component';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styles: []
})
export class ProdutoEditarComponent implements OnInit {

  produto: Produto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      const idProduto = p["id"]

      this.produto = this.produtoService.obterPorId(idProduto);
    })
  }

  salvar() {
    // Redirecionando para um url em especifico
    setTimeout(() => {
      this.router.navigate(['/produtos']);
    }, 1500)
  }
}
