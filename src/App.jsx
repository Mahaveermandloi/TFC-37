import React from "react";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import About from "./Components/About"
import FandC from "./Components/FandC";
import Gallery from "./Components/Gallery"
import OurWork from "./Components/OurWork"
import Contact from "./Components/Contact"


const App = () => {
  return (
    <>
      <center>
       <Header />
       
        <Carousel />
      
      <About />
      
      <FandC />
      
      <Gallery />
      
      <OurWork />

      
      <Contact />
      Copy right
      </center>
    </>
  );
};

export default App;
