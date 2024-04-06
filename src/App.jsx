import React from "react";
import Header from "./Components/Header";
import CarouselMain from "./Components/CarouselMain";
import About from "./Components/About"
import FandC from "./Components/FandC";
import Gallery from "./Components/Gallery"
import OurWork from "./Components/OurWork"
import Contact from "./Components/Contact"


const App = () => {
  return (
    <>

       <Header />

    <CarouselMain />
  

      <About />

     <FandC />

      {/* <Gallery />

      <OurWork />

      <Contact />  */}

    </>
  );
};

export default App;


