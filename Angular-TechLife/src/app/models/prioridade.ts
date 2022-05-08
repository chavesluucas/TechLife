export class Prioridade {
    GRAVISSIMA: string = 'GRAVISSIMA';
	GRAVE: string = 'GRAVE';
	MEDIO: string = 'MEDIO';
	LEVE: string = 'LEVE';

    constructor(obj: Partial<Prioridade>) {
        Object.assign(obj, this);
    }
}
