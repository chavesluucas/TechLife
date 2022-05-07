import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cadastro } from 'src/app/models/cadastro';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {

  listaPacientes$ = new Observable<Cadastro[]>();
  cadastroAction = new Cadastro({});

  monitoraStatusAction$ = new Subject<boolean>();

  constructor(private service: PacientesService) { }

  ngOnInit(): void {

    this.list();

    this.monitoraStatusAction$
        .subscribe(
          (resp) => {
              this.cadastroAction = new Cadastro({});
              this.list();
          }
        )
  }

  list(){
    this.listaPacientes$ = this.service.getPacientes();
  }

  confirmAction(cadastro: Cadastro) {
    if(cadastro) {
      this.cadastroAction = cadastro; // Atribui
    }
  }

  visulizar(id?: number) {

  }

  editar(id?: number){

  }

  delete(id?: number) {
     if(!id) {
        return;
     }
     this.service
         .deletePaciente(id || 0)
         .subscribe((resposta) => resposta ? this.list : '');
     this.list();
  }

  toggleAtivo(id?: number) {
    if(!id) {
      return;
    }
    this.service.toggleAtivo(id || 0)
        .subscribe((resp) => resp ? this.list() : '');
  }
}
