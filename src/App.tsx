import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
