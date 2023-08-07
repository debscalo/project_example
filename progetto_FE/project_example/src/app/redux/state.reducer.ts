import { ActionTypes, ActionUnion } from "./state.actions";


export interface State{
    value: number;
}

const initialState: State = {
    value: 0
};

export function reducer(state: State, action: ActionUnion): State{
    switch(action.type){
        case ActionTypes.Incrementa: {
            return {
                value: state.value += 1
            }
        }

        case ActionTypes.Decrementa: {
            return {
                value: state.value -= 1
            }
        }

        case ActionTypes.Moltiplica: {
            return {
                value: state.value *= 3
            }
        }

        case ActionTypes.Dividi: {
            return {
                value: state.value /= 4
            }
        }

        default:  {
            return state;
        }
    }

}

