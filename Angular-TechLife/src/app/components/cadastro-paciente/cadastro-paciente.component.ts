import { PacientesService } from './../../services/pacientes.service';
import { Cadastro } from './../../models/cadastro';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { Prioridade } from 'src/app/models/prioridade';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent implements OnInit {

  @Input()
  status = new Subject<boolean>();

  @Input()
  cadastroInsert = new Cadastro({});

  formCadastro: Cadastro = new Cadastro({});

  msgRetorno = new Subject<boolean>();

  titleScreen: string = '';

  listaPrioridades$ = new Observable<Cadastro[]>();
  constructor(private service: PacientesService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.cadastroInsert.id) {
      this.titleScreen = `A Editar Paciente ${this.cadastroInsert.nome}`;
    }
    else {
      this.titleScreen = 'Novo Paciente';
    }
  }

  save() {
    if(this.validate()) {
      this.service
          .insertPaciente(this.cadastroInsert)
          .subscribe(
            (cadastroSaved) => {
              if(cadastroSaved.id) {
                this.formCadastro = cadastroSaved;
                this.msgRetorno.next(true);
                this.cancel();
              }
            }
          )
    }
  }

  validate() {
    if(typeof this.cadastroInsert == 'undefined') {
      return false;
    }
    return true;
  }

  cancel() {
    this.status.next(false);

    setTimeout(() => {
      this.router.navigate(['/','lista-pacientes']);
    }, 2000)
  }
}
