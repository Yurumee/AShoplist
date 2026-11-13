import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListaCompras from './ListaCompras.jsx'

function Main() {
    return (
              <BrowserRouter>
                <Routes>
                    <Route path='/lista' element={<ListaCompras/>} />
                </Routes>
              </BrowserRouter>
            )
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Main/>
)
