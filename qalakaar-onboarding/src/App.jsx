import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingForm from './components/OnboardingForm';
import BankingInfo from './components/BankingInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingForm />} />
        <Route path="/BankingInfo" element={<BankingInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
