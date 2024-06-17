import { FunctionComponent, useRef } from "react";
import { UserComponent } from "./UserComponent";
import { useSelector } from "react-redux";
import { idsSelector, usersSelector } from "../advancedRedux/usersSlice";

import "../styles.css";

export const UsersList: FunctionComponent = () => {
  const renders = useRef(0);
  const userIds = useSelector(idsSelector);

  renders.current++;

  return (
    <>
      <span>Renders: {renders.current}</span>
      <ul className="list-none">
        {userIds.map((userId) => (
          <UserComponent key={userId} userId={userId} />
        ))}
      </ul>
    </>
  );
};
