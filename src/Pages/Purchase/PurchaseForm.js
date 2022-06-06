import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import swal from "sweetalert";

const PurchaseForm = ({ tool }) => {
  const [user] = useAuthState(auth);
  console.log(user);
  // console.log(tool);
  const {
    _id,
    name,
    image,
    description,
    price,
    availableQuantity,
    orderQuantity,
  } = tool;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.email = user.email;
    data.name = user.displayName;
    data.price = price;
    data.title = name;
    fetch("https://floating-brook-95654.herokuapp.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal("Complete", "Product added to cart!", "success");
          reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            disabled
            value={user.displayName}
            className="input input-bordered w-full max-w-xs"
            {...register("name", {})}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            disabled
            value={user.email}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            // value={tool?.orderQuantity}
            placeholder={`minimum quantity ${tool?.orderQuantity}`}
            className="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
                message: "Order Quantity is Required",
              },
              // minLength: {
              //   value: 6,
              //   message: "Must be 6 characters or longer",
              // },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn btn-secondary w-full max-w-xs text-white uppercase"
          type="submit"
          value="Sumbit"
        />
      </form>
    </div>
  );
};

export default PurchaseForm;
