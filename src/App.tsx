import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/theme";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div>
        <Navbar />
        <ToastContainer />
        <div className=" ml-72">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
