import "./styles.css";
import { FillerComponent } from "./advancedReduxComponents/FillerComponent";
import { useEffect } from "react";
import { fetchUsersThunk } from "./advancedRedux/fetchUsersThunk";
import { useAppDispatch } from "./advancedRedux/store";

export default function AdvancedReduxApp() {
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
