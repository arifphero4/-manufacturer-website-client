import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Shared/PrimaryButton";

const ToolsCard = ({ tool }) => {
  const {
    _id,
    name,
    image,
    price,
    description,
    availableQuantity,
    orderQuantity,
  } = tool;
  return (
    <div className="hero min-w-fit bg-slate-50  border border-slate-200 rounded ">
      <div className="hero-content flex-col lg:flex-row">
        <img className="w-52" src={image} alt="" />
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="py-2">{description}</p>
          <h3>
            Available: <span> {availableQuantity}</span>
            <span className="text-gray-400">/piece</span>
          </h3>
          <h3>
            Minimum Order: <span> {orderQuantity}</span>
            <span className="text-gray-400">/piece</span>
          </h3>
          <h3>
            Price: <span>$ {price}</span>
          </h3>
          <PrimaryButton>
            <Link to={`/purchase/${_id}`}>Purchase</Link>{" "}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
