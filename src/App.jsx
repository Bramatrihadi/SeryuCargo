import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Favorite from "./pages/Favorite";
import WatchList from "./pages/WatchList"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/favorite" element={Favorite} />
        <Route path="/watchlist" element={WatchList} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
