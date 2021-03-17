import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';
import { MASKS, NgBrazilValidators } from 'ng-brazil'
import { DisplayMessage, GerericValidator, ValidationMessages } from './generic-validation';
import { fromEvent, merge, Observable } from 'rxjs';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent implements OnInit, AfterViewInit {

  // Pega uma lista de objetos da DOM com view query
  @ViewChildren(FormControlName, { read: ElementRef }) formInputsElements: ElementRef[];

  // Criando um formgroup que terão varios formcontrol
  // É necessário adicionar o atributo [formControl]="nomeFormGroup" na tag de form
  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  MASKS = MASKS;

  // Validacao com a classe GenericValidation
  validationMessages: ValidationMessages;
  displayMessages: DisplayMessage = {};
  genericValidation: GerericValidator;

  constructor(private fb: FormBuilder) { 
    // atribuindo os valores das mensagens de validacao
    this.validationMessages = {
      nome: { // Nome do campo do FormGroup
        // Colecao de chave e valor com base nas chaves da classe Validators
        required: 'O Nome é obrigatório!', // Validator.required 
        minLength: 'O Nome deve ter no mínimo 2 caracteres',
        maxlength: 'O Nome deve ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'O CPF é obrigatório',
        cpf: 'CPF inválido'
      },
      email: {
        required: 'O Email é obrigatório',
        email: 'Email inválido'
      },
      senha: {
        required: 'A senha é obrigatória',
        rangeLength: 'A senha deve ter entre 3 e 15 caracteres'
      },
      confirmSenha: {
        required: 'O campo confirma senha é obrigatório',
        rangeLength: 'A senha deve ter entre 3 e 15 caracteres',
        equalTo: 'As senha dever ser iguais' 
      }
    }

    this.genericValidation = new GerericValidator(this.validationMessages);
  }

  // Primeiro método que é chamado após o construtor
  ngOnInit() {
    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength(3, 15)]);
    let confirmSenha = new FormControl('', [Validators.required, CustomValidators.rangeLength(3, 15), CustomValidators.equalTo(senha)]);
    // O parametro passado para o FormControl é o valor que virá do formulário
    // e para atribuit isso ao campo do formulario é necessario adicionar o atributo formControlName="nome"
    // cada input do formulario é um FormControl
    //let nome = new FormControl('');
    this.cadastroForm = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cpf: ['' [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      confirmSenha: confirmSenha
    })
  }

  // Primeiro método que é executado após a view ser renderizada
  ngAfterViewInit(): void {
    // Fazendo a captura dos elementos DOM atraves do evento blur
    let controlBlurs: Observable<any>[] = this.formInputsElements
        .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'))

    merge(...controlBlurs).subscribe(() => {
      this.displayMessages = this.genericValidation.processarMensagens(this.cadastroForm)
    })
  }

  addUser() {
    // Pegando os valores do cadastro, vem em um objeto
    //let x = this.cadastroForm.value -> dados nao tipados
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value) // -> tipando os dados do formulario
    this.formResult = JSON.stringify(this.cadastroForm.value)
  }
}
