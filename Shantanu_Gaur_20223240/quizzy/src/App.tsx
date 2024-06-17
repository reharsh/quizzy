//@ts-nocheck
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Quiz } from './pages/Quiz'



function App({questions}) {
 
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:topic" element={<Quiz questions={questions} />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
