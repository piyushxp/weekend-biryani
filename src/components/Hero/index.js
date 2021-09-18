import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroItems,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <Sidebar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Shahi Biryani @ Balangir</HeroH1>
          <HeroP>Serving Super Delicious Dum Biryani </HeroP>
          <HeroBtn>Learn More</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
