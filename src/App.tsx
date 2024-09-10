import DashboardOverview from "./components/DashboardOverview";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className=" ml-72">
          <DashboardOverview />
        </div>
      </div>
    </>
  );
}

export default App;
