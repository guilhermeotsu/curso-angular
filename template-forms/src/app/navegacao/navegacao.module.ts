import { CommonModule } from "@angular/common"; 
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        FooterComponent,
        MenuComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        RouterModule, // os componentes do módulo faz uso
        CommonModule // todo modulo criado deve ter essa declaracao!!
    ],
    exports: [
        FooterComponent,
        MenuComponent,
        HomeComponent,
        NotFoundComponent
    ] 
})

export class NavegacaoModule {}