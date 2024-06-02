import { FunctionComponent, useRef } from "react";
import type { User } from "../types";
import { useDispatch } from "react-redux";
import { clickedUser } from "../redux/usersSlice";

import "../styles.css";

export const UserComponent: FunctionComponent<{
  user: User;
}> = ({ user }) => {
  const renders = useRef(0);
  const dispatch = useDispatch();

  renders.current++;

  return (
    <li
      className="border-solid border-2 rounded border-sky-100 p-4 hover:bg-slate-400 flex active:bg-slate-100 flex-row justify-between select-none"
      onMouseDown={() => dispatch(clickedUser(user.id))}
    >
      <span className="">{user.name}</span>
      <span>
        <span>Clicks: {user.count ?? 0}</span>
        <span className="px-4">Renders: {renders.current}</span>
      </span>
    </li>
  );
};
