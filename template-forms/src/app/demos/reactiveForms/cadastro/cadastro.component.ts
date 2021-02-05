import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';
import { MASKS, NgBrazilValidators } from 'ng-brazil'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  // Criando um formgroup que terão varios formcontrol
  // É necessário adicionar o atributo [formControl]="nomeFormGroup" na tag de form
  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  MASKS = MASKS;

  constructor(private fb: FormBuilder) { }

  // Primeiro método que é chamado após o construtor
  ngOnInit() {
    // O parametro passado para o FormControl é o valor que virá do formulário
    // e para atribuit isso ao campo do formulario é necessario adicionar o atributo formControlName="nome"
    // cada input do formulario é um FormControl
    //let nome = new FormControl('');
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['' [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: [''],
      confirmSenha: ['']
    })
  }

  addUser() {
    // Pegando os valores do cadastro, vem em um objeto
    //let x = this.cadastroForm.value -> dados nao tipados
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value) // -> tipando os dados do formulario
    this.formResult = JSON.stringify(this.cadastroForm.value)
  }
}
