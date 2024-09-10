// // // import { CiSun } from "react-icons/ci";
// // // import { FaMoon } from "react-icons/fa";

// import useTheme from "../contexts/theme";

// const ThemeButton = () => {
//   const { themeMode, lightTheme, darkTheme } = useTheme();

//   const toggleTheme = (e) => {
//     const darkModeStatus = e.currentTarget.checked;
//     if (darkModeStatus) {
//       darkTheme();
//     } else {
//       lightTheme();
//     }
//   };

//   return (
//     <div>
//       <input
//         type="checkbox"
//         checked={themeMode === "dark"}
//         onChange={toggleTheme}
//       />
//     </div>
//   );
// };

// export default ThemeButton;

import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import useTheme from "../contexts/theme";

const ThemeButton = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <div
      onClick={toggleTheme}
      style={{ cursor: "pointer", fontSize: "24px", padding: "10px" }}
    >
      {themeMode === "dark" ? <CiSun /> : <FaMoon />}
    </div>
  );
};

export default ThemeButton;
