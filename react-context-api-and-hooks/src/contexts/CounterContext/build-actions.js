import * as actionsTypes from './actions-types'

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionsTypes.INCREASE }),
    decrease: () => dispatch({ type: actionsTypes.DECREASE }),
    reset: () => dispatch({ type: actionsTypes.RESET }),
    setCounter: (payload) => dispatch({ type: actionsTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncErrorFn(dispatch)
  }
}

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actionsTypes.ASYNC_INCREASE_START })
  return await new Promise(r => {
    setTimeout(() => {
      dispatch({ type: actionsTypes.ASYNC_INCREASE_END })
      r('resolved')
    }, 2000)
  })
} 

const asyncErrorFn = async (dispatch) => {
  dispatch({ type: actionsTypes.ASYNC_INCREASE_START })
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionsTypes.ASYNC_INCREASE_END })
      reject(new Error('gg error'))
    }, 2000)
  })
} 