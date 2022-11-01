import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home, Services } from './'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />{' '}
        <Route path="/servicios" element={<Services />} exact />
      </Routes>
    </Router>
  )
}

export default App
