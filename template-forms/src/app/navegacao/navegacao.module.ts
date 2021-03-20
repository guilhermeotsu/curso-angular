import { CommonModule } from "@angular/common"; 
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    declarations: [
        FooterComponent,
        MenuComponent,
        HomeComponent
    ],
    imports: [
        RouterModule, // os componentes do módulo faz uso
        CommonModule // todo modulo criado deve ter essa declaracao!!
    ],
    exports: [
        FooterComponent,
        MenuComponent,
        HomeComponent
    ] 
})

export class NavegacaoModule {}