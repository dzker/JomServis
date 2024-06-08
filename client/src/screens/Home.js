import React from "react";

import Navbar from "../components/HomePage/Navbar";
import Carousels from "../components/HomePage/Carousels";
import Section1 from "../components/HomePage/Section1";
import Section3 from "../components/HomePage/Section3";
import Section4 from "../components/HomePage/Section4";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="pb-3">
        <Carousels />
      </div>
      <div className="section-1">
        <Section1 />
      </div>
      <div className="section-3">
        <Section3 />
      </div>
      <div className="section-4">
        <Section4 />
      </div>
    </div>
  );
}

export default Home;
