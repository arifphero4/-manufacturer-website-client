import React from "react";
import swal from "sweetalert";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://floating-brook-95654.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 0) {
          swal("Something wrong please try another id", "", "error");
        } else {
          swal("Success", "Admin Create", "success");
        }
      });
  };
  const removeUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://floating-brook-95654.herokuapp.com/user/${id}`, {
          method: "DELETE",
        }).then((res) => res.json());

        swal("user deleted seccessfully", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <tr>
      <th>{index + 1} </th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs btn-info">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => removeUser(user._id)}
          className="btn btn-xs btn-error "
        >
          Remove User
        </button>{" "}
      </td>
    </tr>
  );
};

export default UserRow;
