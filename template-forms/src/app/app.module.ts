import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from   '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/arquitetura-componentes/pipes/filmes/filmes.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FileSizePipe } from './demos/arquitetura-componentes/pipes/filmes/filesize.pipe';
import { BarComponent } from './demos/bar-di-zones/bar/bar.component';
import { BarModule } from './demos/bar-di-zones/bar/bar.module';
import { BarSerivce } from './demos/bar-di-zones/bar/bar.service';
registerLocaleData(localePt);

@NgModule({
  declarations: [ // declaracao dos componentes do modulo
    AppComponent,  
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil, // Validações de campos, // Campos
    TextMaskModule,
    CustomFormsModule,
    NavegacaoModule,
    AppRoutingModule,
    BarModule
  ],
  providers: [ // Providers sao os servicos injetados por dependencia
    AuthGuard,
    CadastroGuard//,
    //BarSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
