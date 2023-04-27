import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';
import Add from './routes/Add';
import EditUmkm from './routes/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>} />
      </Routes>
    </Router>
  );
}

export default App;
