import React from "react";

const Reviews = () => {
  return (
    <div className="my-8 ">
      <h3 className="text-3xl font-bold text-center text-primary">
        Testimonials
      </h3>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5 px-12">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Abir Mahbud</h2>
            <h4 className="text-blue-400 "> Teacher</h4>
            <p>They are very friendly. Love their products. I trust them.</p>
            <p>
              <strong>Ranting:</strong> <span>4</span>
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://tinyurl.com/yckux28x"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sohel Evans</h2>
            <h4 className="text-blue-400 "> Teacher</h4>
            <p>They are very friendly. Love their products. I trust them.</p>
            <p>
              <strong>Ranting:</strong> <span>4.5</span>
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://kind-curran-955946.netlify.app/leader.5.japan.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mark Don</h2>
            <h4 className="text-blue-400 "> Salesman</h4>
            <p>They are very friendly. Love their products. I trust them.</p>
            <p>
              <strong>Ranting:</strong> <span>4</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
