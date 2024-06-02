import { FunctionComponent, useRef } from "react";
import { User } from "../types";
import { UserComponent } from "./UserComponent";

import "../styles.css";
import { useUsersContext } from "../contextProviders/UsersContextProvider";

export const UsersList: FunctionComponent = () => {
  const renders = useRef(0);

  const { users } = useUsersContext();

  renders.current++;

  return (
    <>
      <span>Renders: {renders.current}</span>
      <ul style={{ listStyleType: "none" }}>
        {users.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};
