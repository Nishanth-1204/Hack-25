import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CircleCursor from "./components/CircleCursor";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <CircleCursor />
    </div>
  );
};

export default App;
