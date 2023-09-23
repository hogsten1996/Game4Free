import { Route, Routes } from "react-router-dom";
import GetGames from "./components/GetGames";
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GetGames />} />
      </Routes>
    </div>
  );
}

export default App;
