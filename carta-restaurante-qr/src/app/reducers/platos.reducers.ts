import { createReducer, on } from "@ngrx/store";
import { Plato } from "../types/plato";
import { crearPlatoAction } from "../actions/platos.actions";

interface AppState {
  platos: Array<Plato>
}

const initialState: AppState = {
  platos: []
}

export const PlatoReducers = createReducer(
  initialState,
  on(crearPlatoAction, (state: AppState, action: {plato: Plato}) => {
    const nuevosPlatos = [
      ...state.platos,
      action.plato
    ]

    return {
      platos: nuevosPlatos
    }
  })
)