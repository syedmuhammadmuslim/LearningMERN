import React, { useEffect } from "react";
import { fetchUsers } from "../stateManagement/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export const GetAllUsers = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((store) => store.usersReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div className="alert alert-info">Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div>
      <ul className="list-group">
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <li key={user._id} className="list-group-item">
                {user.name}
              </li>
            );
          })
        ) : (
          <li className="alert alert-danger">Unauthorized</li>
        )}
      </ul>
    </div>
  );
};
