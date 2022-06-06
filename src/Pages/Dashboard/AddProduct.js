import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,

    formState: { },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" d-flex w-96 justify-center items-center">
      <h2 className="text-3xl font-bold">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            required
            placeholder="product name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {})}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            required
            placeholder="short description"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            required
            placeholder="add price"
            className="input input-bordered w-full max-w-xs"
            {...register("number", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            required
            placeholder="quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("number", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Order</span>
          </label>
          <input
            type="number"
            required
            placeholder="min order"
            className="input input-bordered w-full max-w-xs"
            {...register("number", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image URL </span>
          </label>
          <input
            type="url"
            required
            placeholder="image url"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <input
          className="btn btn-secondary my-8 w-full max-w-xs text-white uppercase"
          type="submit"
          value="Sumbit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
