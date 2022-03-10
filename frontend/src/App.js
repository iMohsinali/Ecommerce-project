import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductScreen from "./Screen/ProductScreen";
import HomeScreem from "./Screen/HomeScreem";
import CartScreen from "./Screen/CartScreen";
function App() {
  return (
    <BrowserRouter>
      <div className=" grid-container">
        <header className="row">
          <div>
            <a href="/" className="brand">
              amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign </a>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/cart/:id?" element={<CartScreen />} />
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
