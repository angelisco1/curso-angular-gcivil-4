import { createSelector } from "@ngrx/store"

const selectPlatosReducers = (state: any) => {
  console.log({state})
  return state.platoReducers
}

export const selectPlatos = createSelector(
  selectPlatosReducers,
  (platosState) => {
    console.log({platosState})
    return platosState.platos
  }
)