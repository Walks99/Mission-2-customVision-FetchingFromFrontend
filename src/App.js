import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import FindSimilarCars from "./Pages/FindSimilarCars/FindSimilarCars";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/findsimilarcars" element={<FindSimilarCars />} />
    </Routes>
  );
}

export default App;
