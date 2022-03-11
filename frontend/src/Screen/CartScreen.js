import React from "react";
import { useParams } from "react-router-dom";
const CartScreen = () => {
  const qty = window.location.search ? window.location.search.split("=")[1] : 1;
  const { id } = useParams();
  const productId = id;
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
