import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "./components/Pages/LandingPage";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
