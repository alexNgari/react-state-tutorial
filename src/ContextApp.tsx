import "./styles.css";
import { FillerComponent } from "./contextComponents/FillerComponent";
import { UsersContextProvider } from "./contextProviders/UsersContextProvider";

export default function ContextApp() {
  return (
    <div className="container flexcontainer px-4">
      <h1 className="font-bold text-left">Users List</h1>
      <UsersContextProvider>
        <FillerComponent />
      </UsersContextProvider>
    </div>
  );
}
