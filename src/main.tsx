import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Lox from './Lox.tsx'
import Navbar from './assets/tsx/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/lox' element={<Lox />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
