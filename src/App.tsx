import { Routes, Route, NavLink } from "react-router";
import { AllDonorsPage } from "@/pages/AllDonors.page";
import { LiveStreamPage } from "@/pages/LiveStream.page";
import "./App.css";
import { RaceLanesPage } from "./pages/RaceLanes.page";

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
          <li style={{ display: "inline", marginRight: "1rem" }}>
            <button>
              <NavLink to="/race-lanes">Race Lanes</NavLink>
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
        <Route path="/all-donors" element={<AllDonorsPage />} />
        <Route path="/live-stream" element={<LiveStreamPage />} />
        <Route path="/race-lanes" element={<RaceLanesPage />} />
      </Routes>
    </>
  );
}

export default App;
