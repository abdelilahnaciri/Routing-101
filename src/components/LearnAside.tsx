import { NavLink } from "react-router-dom";

const LearnAside = () => {
  return (
    <nav className="my-7 px-3 w-fit">
      <ul className="flex flex-col">
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/learn" end>
            Quick Start
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/learn/thinking-in-react">Thinking in React</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/learn/installation">Installation</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LearnAside;
