import "./styles.css";
import { FillerComponent } from "./reduxComponents/FillerComponent";
import { useEffect } from "react";
import { fetchUsersThunk } from "./redux/fetchUsersThunk";
import { useAppDispatch } from "./redux/store";

export default function OtherOtherApp() {
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
