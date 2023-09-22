import {Route, Routes} from "react-router-dom";
import GetGames from "./components/GetGames";


function App() {


  return (
    <div>
      <Routes>
        <Route path="/games" element={<GetGames />}/>
      </Routes>
    </div>
  )
}

export default App
