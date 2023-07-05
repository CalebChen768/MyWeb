import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './components/NavigationBar/NavigationBar.css';
import RandomNumber from "./pages/RandomNumber/RandomNumber";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import './index.css'
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
            <Route exact path="/RandomNumber" element={<RandomNumber />} />
            <Route exact path="/HomePage" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;