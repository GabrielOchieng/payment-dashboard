// import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import Sidebar from "./Sidebar";
import { useState } from "react";
import ThemeButton from "./ThemeButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleSideBar = () => setIsOpen(!isOpen);

  return (
    <nav className=" shadow-lg">
      {isOpen && <Sidebar isOpen={isOpen} handleSideBar={handleSideBar} />}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <IoIosMenu
            className="h-6 w-6 text-gray-900 hover:text-gray-600"
            onClick={handleSideBar}
          />
        </div>
        {/* <div className="flex items-center w-60 p-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
          <CiSearch className="h-6 w-6 text-gray-400 " />
          <input
            type="text"
            placeholder="Type to search..."
            className=" outline-none ml-2"
          />
        </div> */}
        <div>
          <ThemeButton />
        </div>
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
