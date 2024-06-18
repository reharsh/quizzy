import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import  {Page1}  from './pages/Page1'
import { Page2 } from './pages/Page2'
import { Page3 } from './pages/Page3'
import { ErrorPage } from './pages/ErrorPage'
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"       element={<Page1 />}/>
        <Route path="/:topic" element={<Page2/>}/>
        <Route path="/:topic/:score" element={<Page3/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
        
  )
}

export default App
