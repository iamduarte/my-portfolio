import About from "./components/About";
import FogEffect from "./components/FogEffect";
import Footer from "./components/Footer";
import LandingHero from "./components/LandingHero";
import Work from "./components/Work";
import "./index.css";

function App() {
  return (
    <>
      <FogEffect />
      <LandingHero />
      <About />
      <Work />
      <Footer />
    </>
  );
}

export default App;
