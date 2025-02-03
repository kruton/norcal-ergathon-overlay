import { Routes, Route, NavLink } from "react-router-dom"; // Import Routes and Route
import AllDonors from "./AllDonors";
import LiveStream from "./LiveStream";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "1rem" }}>
            <button>
              <NavLink to="/all-donors">All Donors</NavLink>
            </button>
          </li>
          <li style={{ display: "inline", marginRight: "1rem" }}>
            <button>
              <NavLink to="/live-stream">Live Stream</NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-donors" element={<AllDonors />} />
        <Route path="/live-stream" element={<LiveStream />} />
      </Routes>
    </>
  );
}

export default App;
