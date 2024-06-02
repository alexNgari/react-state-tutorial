import { FunctionComponent, useRef } from "react";
import { User } from "../types";
import { UserComponent } from "./UserComponent";

import "../styles.css";

export const UsersList: FunctionComponent<{
  users: User[];
  onClickUser: (id: number) => void;
}> = ({ users, onClickUser }) => {
  const renders = useRef(0);
  renders.current++;

  return (
    <>
      <span>Renders: {renders.current}</span>
      <ul className="list-none">
        {users.map((user) => (
          <UserComponent key={user.id} user={user} onClick={onClickUser} />
        ))}
      </ul>
    </>
  );
};
