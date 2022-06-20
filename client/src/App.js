import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/home/home';

export default function App() {
  return (
    <div className="container app">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
