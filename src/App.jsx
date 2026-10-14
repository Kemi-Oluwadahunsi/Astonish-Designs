import "./App.scss";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMajor from "./components/AboutMajor/AboutMajor";
import CatalogueMain from "./components/CatalogueMain/CatalogueMain";
import ScrollArrow from "./components/backarrow/ScrollArrow";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <ScrollArrow />
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMajor />} />
            <Route path="/catalogue" element={<CatalogueMain />} />
          </Routes>

          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
