import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h3 className="text-2xl font-bold text-purple-500 text-center">
          {" "}
          Welcome to your dashboard
        </h3>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 font-bold text-red-400 text-center">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Order</Link>{" "}
          </li>
          <li>
            <Link to="/dashboard/review">Add Review</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
