import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';
import Add from './routes/Add';
import Edit from './routes/Edit';
import List from './routes/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/add" element={<Add></Add>} />
        <Route path="/logout" element={<Login></Login>} />
        <Route path="/list">
          <Route index element={<List></List>} />
          <Route path=":id" element={<Edit></Edit>} />
        </Route>
        {/* <Route path="/add" element={<Login></Login>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
