import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home, { Nav_Bar } from "./Home";
import Leaderboard from "./components/leaderboard";


export default function App() {  
  return (
        <>
          <BrowserRouter>
            <Nav_Bar/>
            <>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/Leaderboard" element={<Leaderboard/>}/>
            </Routes>
            </>
          </BrowserRouter>
        </>
  );
}
