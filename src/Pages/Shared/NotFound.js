import React from "react";
import error from "../../Assets/Icons/notFound2.gif";

const NotFound = () => {
  return (
    <div>
      <img className="h-screen w-screen" src={error} alt="" />
    </div>
  );
};

export default NotFound;
