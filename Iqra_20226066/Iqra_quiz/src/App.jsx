import React from 'react';
import { Quiz } from './components/Quiz';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import {Cards} from './components/Cards';
import './index.css';


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Quiz/>} />
      <Route path="/cards/:topic" element={<Cards  />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App