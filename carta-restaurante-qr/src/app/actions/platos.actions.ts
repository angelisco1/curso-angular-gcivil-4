import { createAction, props } from "@ngrx/store";
import { Plato } from "../types/plato";

const INICIALIZAR_PLATOS: string = 'INICIALIZAR_PLATOS'
const CREAR_PLATO: string = 'CREAR_PLATO'

const inicializarPlatosAction = createAction(INICIALIZAR_PLATOS)

export const crearPlatoAction = createAction(
  CREAR_PLATO,
  props<{plato: Plato}>()
)