import { Route, Routes } from "react-router-dom";
import GetGames from "./components/GetGames";
import './index.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetGames />} />
      </Routes>
    </div>
  );
}

export default App;
