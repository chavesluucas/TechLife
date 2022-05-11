export class Prioridade {
    id?: number;
    title?: string;
    color?: string;
    order?: number;

    constructor(obj: Partial<Prioridade>) {
        Object.assign(obj, this);
    }
}
