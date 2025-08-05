import {lazy, Suspense, useEffect, useRef} from 'react'
import './App.scss'
import Header from "./components/MainLayout/Header/Header.jsx";
import Footer from "./components/MainLayout/Footer/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import {useDispatch} from "react-redux";
import {initializeAuthState} from "./store/services/authSlice.js";
import useAuth from "./utils/customHooks/useAuth.js";
import GoMindIcon from "./assets/gomind-logo.svg?react";

const IndexPage = lazy(() => import("./pages/IndexPage/IndexPage.jsx"));
const PaymentsPage = lazy(() => import("./pages/PaymentsPage/PaymentsPage.jsx"));
const PearsPage = lazy(() => import("./pages/PearsPage/PearsPage.jsx"));
const DocumentPage = lazy(() => import("./pages/DocumentPage/DocumentPage.jsx"));
const AuthorizationPage = lazy(() => import("./pages/AuthorizationPage/AuthorizationPage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage.jsx"));
const GoMindPage = lazy(() => import("./pages/GoMindPage/GoMindPage.jsx"));


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
        {path: "/", element: IndexPage},
        {path: "/payments", element: PaymentsPage},
        {path: "/pears", element: PearsPage},
        {path: "/documents/:alias", element: DocumentPage},
        {path: "/login", element: AuthorizationPage},
        {path: "/profile", element: ProfilePage},
        {path: "/goMind", element: GoMindPage}

    ]

    return (
    <div className="app">
        <BrowserRouter>
            <Header refs={refs}/>
            <Suspense fallback={
                <div className={"loadScreen"}>
                    <GoMindIcon/>
                </div>
            }>
                <Routes>
                    {paths.map((path) => (
                        <Route
                            key={path.path}
                            path={path.path}
                            element={
                                <path.element
                                    ourProjectsRef={ourProjectsRef}
                                    stackRef={stackRef}
                                />
                            }
                        />
                    ))}
                </Routes>
            </Suspense>
            <Footer ref={contactsRef}/>
            <ScrollToTop/>
        </BrowserRouter>
    </div>
    )
}

export default App
