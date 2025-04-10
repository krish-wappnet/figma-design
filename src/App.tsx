
import './App.css'
import About from './components/About'
import Chef from './components/Chef'
import Hero from './components/Hero'
import Menu from './components/Menu'

function App() {


  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Menu/>
      <Chef/>
    </div>
  )
}

export default App
