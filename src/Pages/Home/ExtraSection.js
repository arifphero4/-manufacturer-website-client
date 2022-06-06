import React from "react";

const ExtraSection = () => {
  return (
    <section className="my-32 text-gray-800 background-radial-gradient">
      <div className="px-6 md:px-12 text-center lg:text-left">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12  items-center">
            <div className="mb-12 lg:mb-0">
              <div className="w-full rounded-lg shadow-lg">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zKqfC0E82gU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl font-bold tracking-tight mb-12 text-red-600">
                Are you ready for this new experience?
              </h1>
              <p className="text-lg">
                See how we manufactue products. We focus on quality and customer
                satisfaction. For more videos see our youtube channel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
