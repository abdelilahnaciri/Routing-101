import { NavLink } from "react-router-dom";

const LearnAside = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 mt-7 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full pb-4 overflow-y-auto">
        <nav className="space-y-2 font-medium">
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/learn"
                end
                className="flex items-center p-3 text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#283541] hover:text-[#149eca] duration-300"
              >
                <span className="ml-3">Quick Start</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/learn/thinking-in-react"
                className="flex items-center p-3 text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#283541] hover:text-[#149eca] duration-300"
              >
                <span className="ml-3">Thinking In React</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/learn/installation"
                className="flex items-center p-3 text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#283541] hover:text-[#149eca] duration-300"
              >
                <span className="ml-3">Installation</span>
              </NavLink>
            </li>
            {/* <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/learn">Learn</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/contribute">Contribute</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/login">Login</NavLink>
        </li> */}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default LearnAside;
