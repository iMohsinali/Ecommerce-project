import { Cart_Item } from "../constants/cartConstant";

export const cartreducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case Cart_Item:
      const item = action.payload;

      const exititem = state.cartItems.find((x) => x.product === item.product);
      if (exititem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === exititem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
};
