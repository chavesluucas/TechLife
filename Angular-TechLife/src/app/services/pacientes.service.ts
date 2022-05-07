import { Cadastro } from './../models/cadastro';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  urlApi: string = `${environment.urlApiPaciente}/api/cadastro`

  constructor(private http: HttpClient) { }

  getPacientes() {
    return this.http.get<Cadastro[]>(this.urlApi);
  }

  getPacientebById(id: number) {
    return this.http.get(`${this.urlApi}/${id}`);
  }

  insertPaciente(paciente: Cadastro) {
    return this.http.post<Cadastro>(this.urlApi, paciente);
  }

  deletePaciente(id: number) {
   return this.http.delete<boolean>(`${this.urlApi}/${id}`);
  }

  updatePaciente(paciente: Cadastro) {
    return this.http.put<Cadastro>(this.urlApi, paciente);
  }

  toggleAtivo(id?: number) {
    return this.http.put<boolean>(`${this.urlApi}/toggleAtivo`, id);
   }
}