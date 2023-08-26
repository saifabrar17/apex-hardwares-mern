import React from "react";
import { toast } from "react-toastify";

const UserTd = ({ user, index, refetch, handleDeleteUser }) => {
  const { email, role } = user;
  const url = `http://localhost:5000/userx/admin/${email}`;
  const makeAdmin = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  const makeEmployee = () => {
    fetch(`http://localhost:5000/userx/employee/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an employee");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an employee`);
        }
      });
  };

  const handleRemoveUser = () => {
    handleDeleteUser(user._id);
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      {/* <td>
        {role !== "admin" && role !== "employee" && (
          <div className="">
            <button onClick={makeAdmin} className="btn btn-xs mr-3">
              Make Admin
            </button>
            <button onClick={makeEmployee} className="btn btn-xs">
              Make Employee
            </button>
          </div>
        )}
      </td> */}
      <td>
        {role === "admin" ? (
          <button className="btn btn-xs" disabled>
            Admin
          </button>
        ) : role === "employee" ? (
          <button className="btn btn-xs" disabled>
            Employee
          </button>
        ) : (
          <div className="">
            <button onClick={makeAdmin} className="btn btn-xs mr-3">
              Make Admin
            </button>
            <button onClick={makeEmployee} className="btn btn-xs">
              Make Employee
            </button>
          </div>
        )}
      </td>

      <td>
        <button className="btn btn-error btn-xs" onClick={handleRemoveUser}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default UserTd;
