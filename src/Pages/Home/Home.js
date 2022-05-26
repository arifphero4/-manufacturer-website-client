import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Summary from "./Summary";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Summary></Summary>
      <Contact></Contact>
    </div>
  );
};

export default Home;
