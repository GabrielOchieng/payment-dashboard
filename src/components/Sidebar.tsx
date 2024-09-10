// import { FaTimes } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LiaTableSolid } from "react-icons/lia";
import { FaWpforms } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoStatsChartSharp } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { CiMemoPad } from "react-icons/ci";
import { Link } from "react-router-dom";

interface SidebarProps {
  handleSideBar: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 z-50 bg-black bg-opacity-85 text-white transition duration-300 ease-in-out ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="flex items-center justify-between h-16 px-6">
        <Link to="/">
          <h1 className="text-xl font-bold">DASHBOARD</h1>
        </Link>
        {/* <button onClick={handleSideBar} className="focus:outline-none">
          <FaTimes className="h-6 w-6" />
        </button> */}
      </div>

      <div className="sidebar-content h-[calc(100%-4rem)] p-6 flex flex-col">
        {/* Sidebar navigation items */}
        <ul className="flex flex-col flex-grow gap-3 text-2xl">
          <li className="hover:underline flex-grow flex items-center gap-4">
            <IoHomeOutline className="w-6 h-6" />
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <LiaTableSolid className="w-6 h-6" />
            <Link to="/table">Table</Link>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <FaWpforms className="w-6 h-6" />
            <Link to="/transfer">Form</Link>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <CgProfile className="w-6 h-6" />

            <Link to="#">Profile</Link>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <IoStatsChartSharp className="w-6 h-6" />
            <Link to="#">Charts</Link>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <GiNetworkBars className="w-6 h-6" />
            <Link to="#">Bars</Link>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <CiMemoPad className="w-6 h-6" />
            <Link to="#">About</Link>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <MdContactPhone className="w-6 h-6" />

            <Link to="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
