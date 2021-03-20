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

@NgModule({
  declarations: [ // declaracao dos componentes do modulo
    AppComponent,  
    SobreComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil, // Validações de campos, // Campos
    TextMaskModule,
    CustomFormsModule,
    NavegacaoModule,
    AppRoutingModule
  ],
  providers: [ // Providers sao os servicos injetados por dependencia
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
