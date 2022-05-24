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
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <h5 className="py-6 text-2xl text-center">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </h5>
          <PrimaryButton>explore</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
