import { Route, Routes } from 'react-router-dom'
import './App.css'
import Project from './page/Project'
import Pricing from './page/Pricing'
import Asosiy from './components/Asosiy'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {

  return (
    <>
    <Pricing/>
      <Project/>
      <Navbar />
      <Asosiy />
      <Footer />
      
    </>
  )
}

export default App
