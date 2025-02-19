import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CircleCursor from "./components/CircleCursor";
import GridBackground from "./components/background/Grid";
import Register from "./pages/Registration/Registration";
import { Footer } from "./components/Footer/Footer";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <GridBackground />
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      <CircleCursor />
    </BrowserRouter>
  );
};

export default App;
