import React from "react";
import image from "../../Assets/Icons/arif.jpg";

const Portfolio = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img className="w-1/2 p-12 " src={image} alt=" " />
          <div>
            <h1 className="text-5xl font-bold">Arif Ahammad</h1>
            <p className="py-6">
              <strong>Email:</strong> <span>ahammadarif232@gmail.com</span>
            </p>
            <h4 className="text-3xl font-bold">Skills</h4>
            <ul className="list-disc ml-8">
              <li>HTML</li>
              <li>CSS</li>
              <li>BOOTSTRAP</li>
              <li>TAILWIND</li>
              <li>REACT</li>
              <li>EXPRESS</li>
              <li>NODE</li>
              <li>MONGODB</li>
            </ul>
            <div>
              <h4 className="text-3xl font-bold my-2">Projects</h4>
              <p className="">
                <strong>Shutter Stock:</strong>{" "}
                <span>
                  <a
                    className="underline text-blue-500"
                    href="https://doctors-portal-e8a61.web.app/"
                  >
                    {" "}
                    Live Link
                  </a>
                </span>
              </p>
              <p className="py-2">
                <strong>Dental Care:</strong>{" "}
                <span>
                  <a
                    className="underline text-blue-500"
                    href="https://healthcare-related-websi-5c9a9.web.app/"
                  >
                    {" "}
                    Live Link
                  </a>
                </span>
              </p>
              <p className="">
                <strong>Trevily Tourism:</strong>{" "}
                <span>
                  <a
                    className="underline text-blue-500"
                    href="https://tourism-related-website-55c3c.web.app/"
                    target="blank"
                  >
                    {" "}
                    Live Link
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
