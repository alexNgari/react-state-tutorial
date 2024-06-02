import { FunctionComponent, useRef } from "react";
import { UserComponent } from "./UserComponent";
import { useSelector } from "react-redux";
import { usersSelector } from "../redux/usersSlice";

import "../styles.css";

export const UsersList: FunctionComponent = () => {
  const renders = useRef(0);
  const users = useSelector(usersSelector);

  renders.current++;

  return (
    <>
      <span>Renders: {renders.current}</span>
      <ul className="list-none">
        {users.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};
