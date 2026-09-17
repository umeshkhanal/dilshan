import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import SEOHandler from "./components/utils/SEOHandler";
import Experience from "./components/Experience";
import ExploreWork from "./components/works/ExploreWork";
import Works from "./components/Works";
import FloatingActions from "./components/utils/FloatingActions";
// ================= LAZY IMPORTS =================
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const LandingPage = () => (
  <>
    <NavBar />
    <Home />
    <About />
    <Experience />
    <Works />
    <Contact />
    <Footer />
  </>
);

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SEOHandler />
      <FloatingActions />
      <Routes>
        {/* MAIN LANDING */}
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/works"
          element={
            <>
              <NavBar />
              <ExploreWork />
              <Footer />
            </>
          }
        />


      </Routes>
    </>
  );
}
