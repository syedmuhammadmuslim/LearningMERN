import React, { useEffect, useState } from "react";

export const GetAllUSers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: localStorage.getItem("userToken"),
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setAllUsers(json);
      });
  }, []);
  return (
    <div>
      <ul className="lis-group">
        {allUsers.length > 0 ? (
          allUsers.map((user) => {
            return (
              <li key={user._id} className="list-group-item">
                {user.name}
              </li>
            );
          })
        ) : (
          <li className="list-group-item">Unauthorized</li>
        )}
      </ul>
    </div>
  );
};
