import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import swal from "sweetalert";
const AddReview = () => {
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
      text: "your review added successfully",
      icon: "success",
      button: "OK",
    });
  };
  return (
    <div className=" d-flex w-96 justify-center items-center">
      <h2 className="text-3xl font-bold">Add Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Profession</span>
          </label>
          <input
            type="text"
            placeholder="enter profession"
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
            <span className="label-text">Review</span>
          </label>
          <textarea
            type="text"
            placeholder="your review"
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
            <span className="label-text">Rating</span>
          </label>
          <input
            type="number"
            placeholder="your rating"
            className="input input-bordered w-full max-w-xs"
            {...register("number", {
              required: {
                value: true,
                message: "Rating is Required",
              },
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
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image URL (optional)</span>
          </label>
          <input
            type="url"
            placeholder="image url"
            className="input input-bordered w-full max-w-xs"
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
          onClick={handleReview}
          className="btn btn-secondary w-full max-w-xs text-white uppercase"
          type="submit"
          value="Sumbit"
        />
      </form>
    </div>
  );
};

export default AddReview;
