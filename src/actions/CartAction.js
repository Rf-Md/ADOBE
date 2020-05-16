
import { ADD_TO_CART, REMOVE_FROM_CART } from '../Static/types'


export const addToCart = (itemToAdd) => dispatch => {

  dispatch({
    type: ADD_TO_CART,
    payload: itemToAdd
  })

}

export const removeFromCart = (itemToremove) => dispatch => {

  dispatch({
    type: REMOVE_FROM_CART,
    payload: itemToremove
  })

}