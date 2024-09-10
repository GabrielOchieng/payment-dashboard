import { useEffect, useState } from "react";
import DashboardOverview from "./components/DashboardOverview";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/theme";

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
        <div className=" ml-72">
          <DashboardOverview />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
