import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Cadastro } from 'src/app/models/cadastro';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-update-modal-paciente',
  templateUrl: './update-modal-paciente.component.html',
  styleUrls: ['./update-modal-paciente.component.scss']
})
export class UpdateModalPacienteComponent implements OnInit {

  @Input()
  statusSave$ = new Subject<boolean>();

  @Input()
  cadastroSave = new Cadastro({});

  constructor(private service: PacientesService) { }

  ngOnInit(): void {
    this.statusSave$
        .subscribe(resp => {
          if(!resp) {
            document.getElementById('btnModalSaveNotaCancel')?.click();
          }
        })
  }

  updateStatus(status: boolean) {
    this.cadastroSave = new Cadastro({});
    this.statusSave$.next(status);
  }
}
