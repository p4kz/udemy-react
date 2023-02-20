import * as actionsTypes from './actions-types'

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionsTypes.INCREASE })
  }
}