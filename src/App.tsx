import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BaseRoutes from './Routing/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BaseRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
