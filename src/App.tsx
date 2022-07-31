import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Menu from "./Pages/Menu";
import { OrderCartProvider } from "./Context/OrderCartContext";
import { Checkout } from "./Pages/Checkout";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/footer";
import { Order_Success } from "./Pages/Ourder_Success";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <OrderCartProvider>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Order_Success" element={<Order_Success />} />
          </Route>{" "}
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </OrderCartProvider>

    </>
  );
}

export default App;
