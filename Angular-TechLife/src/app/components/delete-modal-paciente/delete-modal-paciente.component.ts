import { Component, Input, OnInit } from '@angular/core';
import { Subject, subscribeOn } from 'rxjs';
import { Cadastro } from 'src/app/models/cadastro';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-delete-modal-paciente',
  templateUrl: './delete-modal-paciente.component.html',
  styleUrls: ['./delete-modal-paciente.component.scss']
})
export class DeleteModalPacienteComponent implements OnInit {

  @Input()
  cadastroDel = new Cadastro({});

  @Input()
  statusDelete = new Subject<boolean>();

  constructor(private service: PacientesService) { }

  ngOnInit(): void {
  }

  updateStatus(status: boolean) {
    this.cadastroDel = new Cadastro({});
    this.statusDelete.next(status);
  }

  delete(id?: number) {
    if(!id) {
      return;
    }

    this.service
        .deletePaciente(id || 0) 
        .subscribe(
          resp => {
            if(resp) {
              this.updateStatus(true);
            }
            else {
              this.updateStatus(false);
            }
          }
        )
  }
}
