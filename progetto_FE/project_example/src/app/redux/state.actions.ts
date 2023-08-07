import { Action } from "@ngrx/store";


export enum ActionTypes{
    Incrementa = '[state] Incrementa',
    Decrementa = '[state] Decrementa',
    Moltiplica = '[state] Moltiplica',
    Dividi = '[state] Dividi'
}

export class Incrementa implements Action{
    readonly type = ActionTypes.Incrementa;
}
export class Decrementa implements Action{
    readonly type = ActionTypes.Decrementa;
}
export class Moltiplica implements Action{
    readonly type = ActionTypes.Moltiplica;
}
export class Dividi implements Action{
    readonly type = ActionTypes.Dividi;
}

export type ActionUnion = Incrementa | Decrementa | Moltiplica | Dividi;