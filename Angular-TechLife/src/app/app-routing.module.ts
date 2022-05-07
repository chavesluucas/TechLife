import { CadastroPacienteComponent } from './components/cadastro-paciente/cadastro-paciente.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPacienteComponent } from './components/cards-paciente/cards-paciente.component';
import { AtendimentoPacienteComponent } from './components/atendimento-paciente/atendimento-paciente.component';

const routes: Routes = [
  { path: 'pacientes', component: CardsPacienteComponent },
  { path: 'lista-pacientes', component: ListaPacientesComponent },
  { path: 'atendimento', component: AtendimentoPacienteComponent },
  { path: 'paciente-add', component: CadastroPacienteComponent },
  { path: '', redirectTo: '/pacientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
