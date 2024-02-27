import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Home, Service, About, Portfolio, Contact, Github, User } from './components/index'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route path="github" element={<Github />} />
      </Routes>
    </>
  )
}

export default App
