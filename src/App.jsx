import { useState } from 'react'
import './App.css'
import Header from "./components/MainLayout/Header/Header.jsx";
import Onboarding from "./components/Onboarding/Onboarding.jsx";
import OurStack from "./components/OurStack/OurStack.jsx";
import OurProjects from "./components/OurProjects/OurProjects.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/MainLayout/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
        <Header/>
        <Onboarding/>
        <OurProjects/>
        <Contacts/>
        <OurStack/>
        <Footer/>
    </div>
  )
}

export default App
