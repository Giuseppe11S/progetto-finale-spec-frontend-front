import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

// import pages
import SmartPhoneList from './components/SmartPhoneList'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" 
          element={<SmartPhoneList/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
