import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import ProductScreen from "./Screen/ProductScreen";
import HomeScreem from "./Screen/HomeScreem";
import CartScreen from "./Screen/CartScreen";
import { useSelector } from "react-redux";
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  return (
    <BrowserRouter>
      <div className=" grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">
              amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="bage">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign </Link>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreem />}>
              {" "}
            </Route>
          </Routes>
        </main>

        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
