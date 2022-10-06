import GlobalStyle from "./createGlobalStyle";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import TelaInicial from "./components/TelaInicial.js";
import TelaDeSessões from "./components/TelaDeSessões.js";
import TelaDeAssentos from "./components/TelaDeAssentos.js";
import TelaDeSucesso from "./components/TelaDeSucesso.js";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <NavBar />
            <Routes>
                <Route path="/" element={<TelaInicial />} />
                <Route path="/sessoes/:idFilme" element={<TelaDeSessões />} />
                <Route path="/assentos/:idSessao" element={<TelaDeAssentos />} />
                <Route path="/sucesso" element={<TelaDeSucesso />} />
            </Routes>
        </BrowserRouter>

    );
}