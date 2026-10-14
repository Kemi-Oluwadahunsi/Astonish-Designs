import "./App.scss";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollArrow from "./components/backarrow/ScrollArrow";
import { HelmetProvider } from "react-helmet-async";
import { LazyMotion } from "framer-motion";
import { loadAbout, loadCatalogue, loadCollection, loadNotFound } from "./routes";

const AboutMajor = lazy(loadAbout);
const CatalogueMain = lazy(loadCatalogue);
const CollectionPage = lazy(loadCollection);
const NotFound = lazy(loadNotFound);

const loadMotionFeatures = () =>
  import("./motionFeatures").then((mod) => mod.default);

function App() {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <ScrollArrow />
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<div className="routeFallback" aria-busy="true" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMajor />} />
              <Route path="/catalogue" element={<CatalogueMain />} />
              <Route path="/catalogue/:slug" element={<CollectionPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          <Footer />
        </Router>
      </HelmetProvider>
    </LazyMotion>
  );
}

export default App;
