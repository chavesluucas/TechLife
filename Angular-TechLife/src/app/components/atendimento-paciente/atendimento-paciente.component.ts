import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from 'src/app/models/cadastro';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-atendimento-paciente',
  templateUrl: './atendimento-paciente.component.html',
  styleUrls: ['./atendimento-paciente.component.scss']
})
export class AtendimentoPacienteComponent implements OnInit {

  listaPacientes$ = new Observable<Cadastro[]>();
  
  constructor(private service: PacientesService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.listaPacientes$ = this.service.getPacientes();
  }

  toggleAtivo(id?: number) {
    if(!id) {
      return;
    }
    this.service.toggleAtivo(id || 0)
        .subscribe((resp) => resp ? this.list() : '');
  }
}
