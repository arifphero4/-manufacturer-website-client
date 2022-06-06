import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => reset()(data);
  const handleReview = () => {
    swal({
      title: "GOOD JOB!",
      text: "your profile updated successfully",
      icon: "success",
      button: "OK",
    });
  };
  return (
    <div className=" d-flex w-96 justify-center items-center">
      <h2 className="text-3xl font-bold">My Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            value={user.displayName}
            disabled
            className="input input-bordered w-full max-w-xs"
            {...register("name", {})}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            value={user.email}
            disabled
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="numner"
            placeholder="phone number"
            className="input input-bordered w-full  max-w-xs"
            {...register("number", {
              required: {
                value: true,
                message: "phone number is required",
              },
            })}
          />
          <label className="label">
            {errors.number?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.number.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            placeholder="enter location"
            className="input input-bordered w-full  max-w-xs"
            {...register("text", {
              required: {
                value: true,
                message: "location is required",
              },
            })}
          />
          <label className="label">
            {errors.text?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.text.message}
              </span>
            )}
          </label>
        </div>

        <input
          onClick={handleReview}
          className="btn btn-secondary w-full max-w-xs text-white uppercase"
          type="submit"
          value="Sumbit"
        />
      </form>
    </div>
  );
};

export default MyProfile;
