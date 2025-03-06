import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout.jsx"
function App() {

  return (
    <>
      <Router>
            <Routes>
              <Route path="/" element={<MainLayout/>}></Route>
            </Routes>
      </Router>
    </>
  )
}

export default App
