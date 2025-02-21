import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CircleCursor from "./components/CircleCursor";
import GridBackground from "./components/background/Grid";
import { Footer } from "./components/Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <GridBackground />
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/admin/dash" element={<Dashboard />} /> */}
      </Routes>

      <Footer />
      <CircleCursor />
    </BrowserRouter>
  );
};

export default App;
