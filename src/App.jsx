import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'

// import styling
import './App.css'
import Layout from './components/Layout';

// import pages
import SmartPhoneList from './pages/SmartPhoneList'
import SmartPhoneDetail from './pages/SmartPhoneDetail';
import FavoritePage from './pages/FavoritePage';
import ComparePage from './pages/ComparePage';
import NotFound from './pages/NotFoundPage';

// import context
import { FavoritesProvider } from "./context/FavoritesContext";
import { CompareProvider } from "./context/CompareContext";


function App() {

  return (
    <>
    <FavoritesProvider>
      <CompareProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<SmartPhoneList />} /> {/* Home */}
              <Route path="/smartphone/:id" element={<SmartPhoneDetail />} /> {/* Detail page */}
              <Route path="/favorite" element={<FavoritePage/>}/>
              <Route path='/compare' element={<ComparePage/>}/>
              <Route path='*' element={<NotFound/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CompareProvider>
      </FavoritesProvider>
    </>
  )
}

export default App
