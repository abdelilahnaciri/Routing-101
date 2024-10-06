import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <h3>Root Layout</h3> */}
      <Outlet />
    </div>
  );
};

export default RootLayout;
