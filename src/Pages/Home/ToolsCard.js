import React from "react";
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
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={image} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{description} </p>
        <div class="card-actions">
          <PrimaryButton>purchase</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
