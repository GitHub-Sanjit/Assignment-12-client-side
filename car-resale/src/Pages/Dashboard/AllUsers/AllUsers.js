import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AllUsers = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/users?email=${user?.email}`;

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      // const res = await fetch("http://localhost:5000/users");
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl">All users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>NO.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
