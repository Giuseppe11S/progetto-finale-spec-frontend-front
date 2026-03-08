import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'

// import styling
import './App.css'
import Layout from './components/Layout';

// import pages
import SmartPhoneList from './pages/SmartPhoneList'
import SmartPhoneDetail from './pages/SmartPhoneDetail';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home */}
            <Route index element={<SmartPhoneList />} /> {/* Home */}
            <Route path="/smartphone/:id" element={<SmartPhoneDetail />} /> {/* Detail page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
