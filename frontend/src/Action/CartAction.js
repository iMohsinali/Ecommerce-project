import Axios from "axios";
import { Cart_Item } from "../constants/cartConstant";

export const addtoCart = (productid, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/product/${productid}`);
  console.log(data);
  dispatch({
    type: Cart_Item,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
