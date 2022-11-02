import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home, Services, Rooms, Contact } from './'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />{' '}
        <Route path="/habitaciones" element={<Rooms />} exact />
        <Route path="/servicios" element={<Services />} exact />
        <Route path="/contacto" element={<Contact />} exact />
      </Routes>
    </Router>
  )
}

export default App
