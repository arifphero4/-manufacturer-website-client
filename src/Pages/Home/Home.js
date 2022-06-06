import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import ExtraSection from "./ExtraSection";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Summary></Summary>
      <Reviews></Reviews>
      <ExtraSection></ExtraSection>
      <Contact></Contact>
    </div>
  );
};

export default Home;
