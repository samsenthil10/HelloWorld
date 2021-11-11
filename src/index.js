import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Route, Routes, BrowserRouter } from "react-router-dom";

const routing = (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="home" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  routing,
  document.getElementById("root")
);

reportWebVitals();
