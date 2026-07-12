import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Location from "./components/Location";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}

export default App;
