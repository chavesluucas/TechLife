import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { CadastroPacienteComponent } from './components/cadastro-paciente/cadastro-paciente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateModalPacienteComponent } from './components/update-modal-paciente/update-modal-paciente.component';
import { AtendimentoPacienteComponent } from './components/atendimento-paciente/atendimento-paciente.component';
import { CardsPacienteComponent } from './components/cards-paciente/cards-paciente.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    CadastroPacienteComponent,
    NavbarComponent,
    UpdateModalPacienteComponent,
    AtendimentoPacienteComponent,
    CardsPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
