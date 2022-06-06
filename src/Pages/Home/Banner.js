import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import brush from "../../Assets/Icons/brush.png";
import bg from "../../Assets/Images/bg-3.jpg";

const style = {
  minHeight: 300,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bg}) no-repeat`,
  backgroundSize: "cover",
};

const Banner = () => {
  return (
    <div style={style} className="hero min-h-screen py-28">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        {/* <img
          src={brush}
          className="max-w-sm rounded-lg shadow-2xl  w-80"
          alt=""
        /> */}
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold uppercase">
            {" "}
            Best place to find perfact brushes for color
          </h1>

          <p className="py-6 text-xl ">
            {" "}
            Danyang Yashi Brush Factory is a professional manufacturer for
            series brushes over 30+ years, special in paint brush and paint
            roller. By more than 30 years endeavor.
          </p>
          <PrimaryButton>explore</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
