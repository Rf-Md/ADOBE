import { GET_SHOPPING_LIST, UPDATE_LIST, GET_ERRORS } from '../Static/types'

const initialState = {

  shoppingList: [],
  listToShow: [],

  errors: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOPPING_LIST:
      return {
        ...state,
        shoppingList: action.payload,
        listToShow: action.payload
      }


    case UPDATE_LIST:
      return {
        ...state,
        listToShow: action.payload
      }
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }

    default:
      return state;
  }
}
