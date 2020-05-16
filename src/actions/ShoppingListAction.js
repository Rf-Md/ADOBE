import axios from 'axios';

import { GET_SHOPPING_LIST, UPDATE_LIST, GET_ERRORS } from '../Static/types'


export const getShoppingList = () => dispatch => {

  axios
    .get('./cart.json')
    .then(res => {
      dispatch({
        type: GET_SHOPPING_LIST,
        payload: res.data.items
      })
    })
    .catch(err => {
      console.error('Error occured while fetching Shopping list ', err)
      dispatch({
        type: GET_ERRORS,
        payload: err
      })

    })


}


export const updateList = (list) => dispatch => {
  dispatch({
    type: UPDATE_LIST,
    payload: list
  })
}
