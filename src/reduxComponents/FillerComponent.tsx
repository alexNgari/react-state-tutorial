import { FunctionComponent, useRef } from "react";

import "../styles.css";
import { UsersList } from "./UsersList";

export const FillerComponent: FunctionComponent = () => {
  const renders = useRef(0);
  renders.current++;

  return (
    <>
      <div>Filler renders: {renders.current}</div>
      <UsersList />
    </>
  );
};
