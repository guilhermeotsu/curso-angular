import { CommonModule } from "@angular/common";
import { NgModule }     from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { NotFoundCompoent } from "./not-found/not-found.component";

@NgModule({
  declarations:[
    NotFoundCompoent,
    MenuComponent,
    FooterComponent,
    HomeComponent
  ],
  imports:[ // declara modulos que serao utilizados
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports:[ // exporta para o mundo externo 
    NotFoundCompoent,
    MenuComponent,
    FooterComponent,
    HomeComponent
  ]
})

export class NavegacaoModule {  }
