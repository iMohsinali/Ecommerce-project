import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addtoCart } from "../Action/CartAction";
const CartScreen = () => {
  const qty = window.location.search ? window.location.search.split("=")[1] : 1;
  const { id } = useParams();
  const dispatch = useDispatch();

  const productId = id;
  useEffect(() => {
    if (productId) {
      dispatch(addtoCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>CartScreen</h1>
      <p>
        ADD TO CART : ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
};

export default CartScreen;
