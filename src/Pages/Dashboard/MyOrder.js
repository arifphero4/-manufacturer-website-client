import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import swal from "sweetalert";

const MyOrder = () => {
  const [user] = useAuthState(auth);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://floating-brook-95654.herokuapp.com/order`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.filter((d) => user.email === d.email));
      });
  }, [orders]);
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://floating-brook-95654.herokuapp.com/order/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          });
        swal("Poof! Your order product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const handlePayment = () => {
    swal({
      title: "Payment Method",
      text: "Please wait few days! the method is not ready yet!",
      icon: "success",
      button: "OK",
    });
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-3">My Order</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Total Price</th>
              <th>Quntity</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.title}</td>
                <td>{order.price * order.quantity}</td>
                <td>{order.quantity}</td>
                <td>
                  <label
                    htmlFor="delete-confirm-modal"
                    className="btn btn-xs btn-error"
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
                  </label>
                </td>
                <td>
                  <button
                    onClick={handlePayment}
                    className="btn btn-xs btn-success py-1 px-3"
                  >
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyOrder;
