import { FunctionComponent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickedUser, userSelector } from "../normalizedRedux/usersSlice";
import { RootState } from "../normalizedRedux/store";

import "../styles.css";

export const UserComponent: FunctionComponent<{
  userId: number;
}> = ({ userId }) => {
  const renders = useRef(0);
  const user = useSelector((state: RootState) => userSelector(state, userId));
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
