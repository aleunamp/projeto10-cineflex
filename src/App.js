import GlobalStyle from "./createGlobalStyle";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import MainScreen from "./components/MainScreen.js";
import SessionScreen from "./components/SessionScreen.js";
import SeatsScreen from "./components/SeatsScreen.js";
import SucessScreen from "./components/SucessScreen.js";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <NavBar />
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/sessoes/:movieId" element={<SessionScreen />} />
                <Route path="/assentos/:sessionId" element={<SeatsScreen />} />
                <Route path="/sucesso" element={<SucessScreen />} />
            </Routes>
        </BrowserRouter>
    );
}