import { FunctionComponent, useRef } from "react";
import { User } from "../types";
import { UserComponent } from "./UserComponent";

import "../styles.css";
import { UsersList } from "./UsersList";

export const FillerComponent: FunctionComponent<{
  users: User[];
  onClickUser: (id: number) => void;
}> = ({ users, onClickUser }) => {
  const renders = useRef(0);
  renders.current++;

  return (
    <>
      <div>Filler renders: {renders.current}</div>
      <UsersList users={users} onClickUser={onClickUser} />
    </>
  );
};
