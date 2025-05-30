import {useRef, useState} from 'react'
import './App.scss'
import Header from "./components/MainLayout/Header/Header.jsx";
import Onboarding from "./components/Onboarding/Onboarding.jsx";
import OurStack from "./components/OurStack/OurStack.jsx";
import OurProjects from "./components/OurProjects/OurProjects.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/MainLayout/Footer/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import IndexPage from "./pages/IndexPage/IndexPage.jsx";
import DocumentPage from "./pages/DocumentPage/DocumentPage.jsx";
import PaymentsPage from "./pages/PaymentsPage/PaymentsPage.jsx";
import PearsPage from "./pages/PearsPage/PearsPage.jsx";

function App() {
    const ourProjectsRef = useRef(null)
    const stackRef = useRef(null)
    const contactsRef = useRef(null)
    const refs = [ourProjectsRef, stackRef, contactsRef]

    const paths = [
        {path: "/", element: <IndexPage ourProjectsRef={ourProjectsRef} stackRef={stackRef}/>},
        {path: "/payments", element: <PaymentsPage/>},
        {path: "/pears", element: <PearsPage/>},
        {path: "/documents/:alias", element: <DocumentPage/>},

    ]

    return (
    <div className="app">
        <BrowserRouter>
            <Header refs={refs}/>
                <Routes>
                    {paths.map((path) => (
                        <Route key={path.path} path={path.path} element={path.element} />
                    ))}
                </Routes>
            <Footer ref={contactsRef}/>
        </BrowserRouter>
    </div>
    )
}

export default App
