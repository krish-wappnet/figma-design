
import './App.css'
import About from './components/About'
import Chef from './components/Chef'
import Hero from './components/Hero'
import Laurels from './components/Laurels'
import Menu from './components/Menu'
import PhotoGallery from './components/PhotoGallery'

function App() {


  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Menu/>
      <Chef/>
      <Laurels/>
      <PhotoGallery/>
    </div>
  )
}

export default App
