import React from "react";

const Blogs = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 mx-12">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            Q.1: How will you improve the performance of a React Application?
          </h2>

          <ul className="list-disc">
            {" "}
            <li>Using Immutable Data Structures</li>
            <li>Using function components</li>
            <li>Optimization of Dependency</li>
            <li>Avoiding using Index as Key for map</li>
            <li>Avoiding Props in Initial States</li>
            <li>CSS Animations Instead of JS Animations</li>
          </ul>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            Q.2: What are the different ways to manage a state in a React
            application?
          </h2>

          <ul className="list-disc">
            {" "}
            <li>React Hooks</li>
            <li>Redux</li>
            <li>Recoil</li>
            <li>Jotai</li>
          </ul>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            Q.3: How does prototypical inheritance work?
          </h2>

          <p>
            JavaScript is a prototype-based, Object Oriented programming
            language. After the ES6 updates, JavaScript allowed for “prototypal
            inheritance”, meaning that objects and methods can be shared,
            extended, and copied. Sharing amid objects makes for easy
            inheritance of structure (data fields), behavior (functions /
            methods), and state (data values).
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            Q.4: What is a unit test? Why should write unit tests?
          </h2>

          <p>
            Unit testing is testing each parts of the application. The main
            reasonto check that all the individual parts are working as required
            or not. A unit is known as the smallest possible component of
            software that can be tested. Generally, it has a few inputs and a
            single output.
          </p>
          <ul className="list-disc">
            <li>Quality of Code</li>
            <li>Provides Documentation</li>
            <li>Find Software Bugs Easily</li>
            <li>It helps to make the future changes smooth</li>
          </ul>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            Q.5: You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <h5 className="text-xl">It can be done using filter and find.</h5>
          <p>
            const searchName='hazzaz' const info=products.filer(product =>
            product.name==searchName) console.log(info)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
