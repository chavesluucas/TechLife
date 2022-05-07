import { PacientesService } from './../../services/pacientes.service';
import { Cadastro } from './../../models/cadastro';
import { Subject, Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

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

  pacientesList = new Observable<Cadastro[]>();

  formCadastro: Cadastro = new Cadastro({});

  msgRetorno = new Subject<boolean>();
  constructor(private service: PacientesService) { }

  ngOnInit(): void {

  }

  save() {
    this.service
        .insertPaciente(this.formCadastro)
        .subscribe(
          (cadastro) => {
            if(cadastro.id) {
              this.formCadastro = cadastro;
              this.msgRetorno.next(true);
            }
          }
        )
  }
}
