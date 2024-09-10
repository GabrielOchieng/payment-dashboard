import { FaTimes } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LiaTableSolid } from "react-icons/lia";
import { FaWpforms } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoStatsChartSharp } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";

interface SidebarProps {
  handleSideBar: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ handleSideBar, isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 z-50 bg-black bg-opacity-85 text-white transition duration-300 ease-in-out ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="flex items-center justify-between h-16 px-6">
        <a href="/">
          <h1 className="text-xl font-bold">DASHBOARD</h1>
        </a>
        <button onClick={handleSideBar} className="focus:outline-none">
          <FaTimes className="h-6 w-6" />
        </button>
      </div>

      <div className="sidebar-content h-[calc(100%-4rem)] p-6 flex flex-col">
        {/* Sidebar navigation items */}
        <ul className="flex flex-col flex-grow gap-3 text-2xl">
          <li className="hover:underline flex-grow flex items-center gap-4">
            <IoHomeOutline className="w-6 h-6" />
            <a href="#">Home</a>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <LiaTableSolid className="w-6 h-6" />
            <a href="#">Tables</a>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <FaWpforms className="w-6 h-6" />
            <a href="#">Form</a>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <CgProfile className="w-6 h-6" />

            <a href="#">Profile</a>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <IoStatsChartSharp className="w-6 h-6" />
            <a href="#">Charts</a>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <GiNetworkBars className="w-6 h-6" />
            <a href="#">Bars</a>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <FcAbout className="w-6 h-6" />
            <a href="#">About</a>
          </li>
          <li className="hover:underline flex-grow flex items-center gap-4">
            <FaTimes className="w-6 h-6" />

            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
