import Difficulty from "./pages/Difficulty";
import Game from "./pages/Game";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Difficulty />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
