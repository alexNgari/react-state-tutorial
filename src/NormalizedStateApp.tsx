import "./styles.css";
import { FillerComponent } from "./normalizedReduxComponents/FillerComponent";
import { useEffect } from "react";
import { fetchUsersThunk } from "./normalizedRedux/fetchUsersThunk";
import { useAppDispatch } from "./normalizedRedux/store";

export default function NormalizedStateApp() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, []);

  return (
    <div className="container flexcontainer px-4">
      <h1 className="font-bold text-left">Users List</h1>
      <FillerComponent />
    </div>
  );
}
