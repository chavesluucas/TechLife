import { Prioridade } from "./prioridade";

export class Cadastro {
  id?: number;
  nome?: string;
  cpf?: string;
  idade?: number;
  endereco?: string;
  flAtivo?: boolean;
  prioridade: Prioridade = new Prioridade({});

  constructor(obj: Partial<Cadastro>) {
    Object.assign(this, obj);
  }
}
