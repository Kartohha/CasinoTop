import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/main/MainPage";
import RoulettePage from "./routes/games/RoulettePage";
import SlotPage from "./routes/games/SlotPage";
import BlackJPage from "./routes/games/BlackjackPage";
import RegPage from "./routes/games/RegPage";
import LoggPage from "./routes/games/LogPage";

function App() {
  return (
    <div className="App">
      {/* Hashrouter */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          {/* registr */}
          <Route exact path="/roulette" element={<RoulettePage />} />
          {/* profile */}
          <Route exact path="/slot" element={<SlotPage />} />
          {/* rulette */}
          <Route exact path="/blackjeck" element={<BlackJPage />} />
          {/* Hashrouter */}
          <Route exact path="/registration" element={<RegPage />} />
          <Route exact path="/login" element={<LoggPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
