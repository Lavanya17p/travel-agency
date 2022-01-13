import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Recommand from "./Components/Recommand";
import ScrollToTop from "./Components/ScrollToTop";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import scrollreveal from "scrollreveal";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
    nav,
    #home,
    #services,
    #recommand,
    #testimonials,
    footer
    `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Recommand />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
