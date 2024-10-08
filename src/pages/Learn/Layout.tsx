import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import LearnAside from "../../components/LearnAside";

const LearnLayout = () => {
  return (
    <div className="learn-layout">
      <LearnAside />
      <div className="ml-72">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LearnLayout;
