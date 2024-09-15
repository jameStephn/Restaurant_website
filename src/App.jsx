
import './App.css'
import About_section from './components/About/About_section'
import Dining_Event from './components/Dining/Dining_Event'
import Divider from './components/Divider'
import Footer from './components/footer/Footer'
import Hero from "./components/Hero/Hero"
import Quality_food from './components/Quality/Quality_food'
import SalmonDivider from './components/SalmonDivider'
import Today_special from './components/Today_special/Today_special'
function App() {

  return (
  <div className="body  text-white  w-full h-full  bg-[#1E1E1E]">
 
    <Hero/>
    <Today_special/>
    <Divider/>
    <Quality_food/>
    <Dining_Event/>
    <SalmonDivider/>
    <About_section/>
    <Footer/>
  </div>
  )
}

export default App
