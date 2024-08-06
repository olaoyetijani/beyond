import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Service from "./components/Service/Service";
import Works from "./components/Works/Works";

function App() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <Home />
      </div>
      <Service />
      <Works />
      <Footer />
    </>
  );
}

export default App;
