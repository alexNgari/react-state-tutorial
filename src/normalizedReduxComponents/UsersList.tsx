import { FunctionComponent, useRef } from "react";
import { UserComponent } from "./UserComponent";
import { useSelector } from "react-redux";
import { userIdsSelector } from "../normalizedRedux/usersSlice";

import "../styles.css";

export const UsersList: FunctionComponent = () => {
  const renders = useRef(0);
  const userIds = useSelector(userIdsSelector);

  renders.current++;

  return (
    <>
      <span>Renders: {renders.current}</span>
      <ul className="list-none">
        {userIds.map((id) => (
          <UserComponent key={id} userId={id} />
        ))}
      </ul>
    </>
  );
};
