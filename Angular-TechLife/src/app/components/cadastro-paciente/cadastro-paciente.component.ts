import { PacientesService } from './../../services/pacientes.service';
import { Cadastro } from './../../models/cadastro';
import { Subject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private service: PacientesService) { }

  ngOnInit(): void {
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
}
