import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Homepage = React.lazy(() => import("./pages/Homepage/Homepage"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
