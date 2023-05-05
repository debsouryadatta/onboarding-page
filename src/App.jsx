import './App.css'
import Onboarding from './pages/Onboarding';
import Admin from './pages/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 
// 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Onboarding />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
