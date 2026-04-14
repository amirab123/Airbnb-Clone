import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Reservation from "./pages/Reservation";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./index.css";

function App() {
  return (
    <BrowserRouter>

      {/* Layout global */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Detail />} />
        <Route path="/reservation/:id" element={<Reservation />} />
      </Routes>

  

    </BrowserRouter>
  );
}

export default App;