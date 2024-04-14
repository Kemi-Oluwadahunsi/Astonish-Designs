import "./App.scss";
// import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMajor from "./components/AboutMajor/AboutMajor";
import CatalogueMain from "./components/CatalogueMain/CatalogueMain";
import { useState } from "react";
import ScrollArrow from "./components/backarrow/ScrollArrow";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [showContact, setShowContact] = useState(true);

  const toggleContact = () => {
    setShowContact((prevShowContact) => !prevShowContact);
  };

  return (
    <>
      <ScrollArrow />
      <HelmetProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home showContact={showContact} toggleContact={toggleContact} />
              }
            />
            <Route
              path="/about"
              element={
                <AboutMajor
                  showContact={showContact}
                  toggleContact={toggleContact}
                />
              }
            />
            <Route
              path="/catalogue"
              element={
                <CatalogueMain
                  showContact={showContact}
                  toggleContact={toggleContact}
                />
              }
            />
          </Routes>

          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
