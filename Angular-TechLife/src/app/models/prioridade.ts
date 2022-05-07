export class Prioridade {
    gravissima?: string = 'gravissima';
	grave: string = "Grave";
	medio: string = "Medio";
	leve: string = "Leve";

    constructor(obj: Partial<Prioridade>) {
        Object.assign(obj, this);
    }
}
