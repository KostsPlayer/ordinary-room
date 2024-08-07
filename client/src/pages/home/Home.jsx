import React from "react";
import SmoothScroll from "../../helpers/SmoothScroll";
import Navbar from "../../components/navbar/Navbar";
import Hero from "./hero/Hero";

function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <div className="home">
        <Hero />
      </div>
    </>
  );
}

export default Home;
