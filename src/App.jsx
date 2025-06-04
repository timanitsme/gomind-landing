import {useEffect, useRef, useState} from 'react'
import './App.scss'
import Header from "./components/MainLayout/Header/Header.jsx";
import Footer from "./components/MainLayout/Footer/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import IndexPage from "./pages/IndexPage/IndexPage.jsx";
import DocumentPage from "./pages/DocumentPage/DocumentPage.jsx";
import PaymentsPage from "./pages/PaymentsPage/PaymentsPage.jsx";
import PearsPage from "./pages/PearsPage/PearsPage.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage.jsx";
import {useDispatch} from "react-redux";
import {initializeAuthState} from "./store/services/authSlice.js";
import useAuth from "./utils/customHooks/useAuth.js";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import GoMindPage from "./pages/GoMindPage/GoMindPage.jsx";

function App() {
    const dispatch = useDispatch();
    const {isAuthorized, userProfile, isLoading, error} = useAuth()
    useEffect(() => {
        dispatch(initializeAuthState());
    }, [dispatch]);
    const ourProjectsRef = useRef(null)
    const stackRef = useRef(null)
    const contactsRef = useRef(null)
    const refs = [ourProjectsRef, stackRef, contactsRef]

    const paths = [
        {path: "/", element: <IndexPage ourProjectsRef={ourProjectsRef} stackRef={stackRef}/>},
        {path: "/payments", element: <PaymentsPage/>},
        {path: "/pears", element: <PearsPage/>},
        {path: "/documents/:alias", element: <DocumentPage/>},
        {path: "/login", element: <AuthorizationPage/>},
        {path: "/profile", element: <ProfilePage/>},
        {path: "/goMind", element: <GoMindPage/>}

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
            <ScrollToTop/>
        </BrowserRouter>
    </div>
    )
}

export default App
