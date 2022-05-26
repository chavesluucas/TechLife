import { PacientesService } from './../../services/pacientes.service';
import { Cadastro } from './../../models/cadastro';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Prioridade } from 'src/app/models/prioridade';
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
  cadastroInsert = new Cadastro({prioridade: new Prioridade({})});

  formCadastro: Cadastro = new Cadastro({prioridade: new Prioridade({})});

  msgRetorno = new Subject<boolean>();

  listaPrioridades$ = new Observable<Prioridade[]>();
  constructor(private service: PacientesService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllPrioridades();
  }

  getAllPrioridades() {
    this.listaPrioridades$ = this.service.getPrioridade();
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
