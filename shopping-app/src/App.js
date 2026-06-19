import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
