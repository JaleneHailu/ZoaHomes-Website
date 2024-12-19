import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import CompanyPage from './Pages/CompanyPage.jsx';
import Buy from './Pages/Buy.jsx';
import Corporate from './Pages/Corporate.jsx';
import BuyZoa from './Pages/BuyZoa.jsx';
// import Team from './Pages/Team.jsx';
import Contact from './Pages/Contact.jsx';
import Info from './Pages/Info.jsx';
import KalosProjectDetail from './Pages/KalosProjectDetail.jsx';
// import AirportProjectDetail from './Pages/AirportProjectDetail.jsx';
import ZoaProjectDetail from './Pages/ZoaProjectDetails.jsx';
import Spinner from './Pages/Spinner.jsx';
import FixedButton from "./Pages/FixedButton.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <Router>
            {/* Main App Routes */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Ethiopia" element={<CompanyPage country="Ethiopia" />} />
              <Route path="/Kenya" element={<CompanyPage country="Kenya" />} />
              <Route path="/Ethiopia/buy" element={<Buy country="Ethiopia" />} />
              <Route path="/Kenya/buy" element={<BuyZoa country="Kenya" />} />
              <Route path="/Ethiopia/corporate" element={<Corporate country="Ethiopia" />} />
              <Route path="/Kenya/corporate" element={<Corporate country="Kenya" />} />
              {/* <Route path="/Ethiopia/team" element={<Team country="Ethiopia" />} />
              <Route path="/Kenya/team" element={<Team country="Kenya" />} /> */}
              <Route path="/Ethiopia/contact" element={<Contact country="Ethiopia" />} />
              <Route path="/Kenya/contact" element={<Contact country="Kenya" />} />
              <Route path="/Kenya/ZoaProjectDetail" element={<ZoaProjectDetail country="Kenya" />} />
              <Route path="/Ethiopia/KalosProjectDetail" element={<KalosProjectDetail country="Ethiopia" />} />
              {/* <Route path="/Ethiopia/AirportProjectDetail" element={<AirportProjectDetail />} /> */}
              <Route path="/Ethiopia/info" element={<Info country="Ethiopia" />} />
              <Route path="/Kenya/info" element={<Info country="Kenya" />} />
            </Routes>

            {/* Fixed Button */}
            <FixedButton />
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
