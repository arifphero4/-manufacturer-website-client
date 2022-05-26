import React from "react";

const Summary = () => {
  return (
    <div className="max-w-7xl my-28 mx-auto">
      <div className="text-center mb-10 ">
        <h3 className="text-primary  text-4xl font-bold uppercase">
          Business Summary
        </h3>
        <h4 className="text-1xl font-bold my-2">
          Try to Understand Our Expertise
        </h4>
      </div>

      <div className="grid md:grid-cols-4 gap-5 px-10 text-center">
        <div className="border py-8 rounded-xl shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/000000/external-compilation-marketing-and-seo-phatplus-lineal-color-phatplus.png"
                alt=" "
              />
            </div>
          </div>

          <p className="text-4xl font-bold text-indigo-600">100+</p>
          <p className="text-dark mt-2 uppercase">customer</p>
        </div>
        <div className="border py-8 rounded-xl shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src="https://img.icons8.com/color/48/000000/delivery--v2.png"
                alt=" "
              />
            </div>
          </div>

          <p className="text-4xl font-bold text-indigo-600">24/7</p>
          <p className="text-dark mt-2 uppercase">Delivery</p>
        </div>
        <div className="border py-8 rounded-xl shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src="https://img.icons8.com/external-fauzidea-outline-color-fauzidea/64/000000/external-customer-e-commerce-fauzidea-outline-color-fauzidea.png"
                alt=" "
              />
            </div>
          </div>

          <p className="text-4xl font-bold text-indigo-600">72M+</p>
          <p className="text-dark mt-2 uppercase">Annual revenue</p>
        </div>
        <div className="border py-8 rounded-xl shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://img.icons8.com/external-filled-outline-wichaiwi/64/000000/external-transactions-gamefi-filled-outline-wichaiwi.png" />
            </div>
          </div>

          <p className="text-4xl font-bold text-indigo-600">27K+</p>
          <p className="text-dark mt-2 uppercase">Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
