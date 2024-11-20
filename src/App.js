import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Array from './pages/DataStructures/Array';
import BubbleSort from './pages/Algorithms/Sorting/BubbleSort';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/data-structures/array" element={<Array />} />
        <Route path="/algorithms/sorting/bubble-sort" element={<BubbleSort />} />
      </Routes>
    </Router>
  );
}

export default App;
