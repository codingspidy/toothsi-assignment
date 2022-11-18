import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Success from "./pages/success";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home products={products} />}></Route>
        <Route exact path="/checkout" element={<Checkout />}></Route>
        <Route exact path="/success" element={<Success />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
