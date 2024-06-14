import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const product = [
    {
      price: 99999,
      name: "IPhone 12S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
  ];
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
