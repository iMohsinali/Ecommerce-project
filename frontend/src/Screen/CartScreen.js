import React from "react";
import { useParams, useLocation } from "react-router-dom";

const CartScreen = () => {
  const params = useParams();
  const location = useLocation();
  const productid = params.id;
  console.log(productid);
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  return (
    <div>
      <h1>CartScreen</h1>
      <p>
        ADD To CART:ProductID:{productid} Qty:{qty}
      </p>
    </div>
  );
};

export default CartScreen;
