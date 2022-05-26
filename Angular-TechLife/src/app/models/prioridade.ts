export class Prioridade {
    id?: number;
    title?: string;
    color?: string;
    priorityOrder?: number;

    constructor(obj: Partial<Prioridade>) {
        Object.assign(obj, this);
    }
}
