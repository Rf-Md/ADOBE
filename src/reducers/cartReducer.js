import { ADD_TO_CART, REMOVE_FROM_CART } from '../Static/types'

const initialState = {
  cartList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newCartList, tempPayload, temp = []
      tempPayload = action.payload
      newCartList = state.cartList.filter(i => (i.name !== tempPayload.name));
      tempPayload.itemsCount = 1
      temp.push(...newCartList, tempPayload)
      return {
        ...state,
        cartList: temp
      }

    case REMOVE_FROM_CART:
      let listAfterDelete = state.cartList.filter(i => (i.name !== action.payload.name));
      return {
        ...state,
        cartList: listAfterDelete
      }

    default:
      return state;
  }
}