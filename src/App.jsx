import {useRef, useState} from 'react'
import './App.scss'
import Header from "./components/MainLayout/Header/Header.jsx";
import Onboarding from "./components/Onboarding/Onboarding.jsx";
import OurStack from "./components/OurStack/OurStack.jsx";
import OurProjects from "./components/OurProjects/OurProjects.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/MainLayout/Footer/Footer.jsx";

function App() {
    const ourProjectsRef = useRef(null)
    const stackRef = useRef(null)
    const contactsRef = useRef(null)
    const refs = [ourProjectsRef, stackRef, contactsRef]

    return (
    <div className="app">
        <Header refs={refs}/>
        <Onboarding/>
        <OurProjects ref={ourProjectsRef}/>
        <OurStack ref={stackRef}/>
        <Footer ref={contactsRef}/>
    </div>
    )
}

export default App
