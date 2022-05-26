import React from "react";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        alert("successfully make an admin");
      });
  };
  return (
    <div>
      <tr>
        <th>1</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button onClick={makeAdmin} className="btn btn-xs">
              Make Admin
            </button>
          )}
        </td>
        <td>
          <button className="btn btn-xs">Remove User</button>{" "}
        </td>
      </tr>
    </div>
  );
};

export default UserRow;