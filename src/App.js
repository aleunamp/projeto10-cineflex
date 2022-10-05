import GlobalStyle from "./createGlobalStyle";

import React from "react";

import NavBar from "./components/NavBar.js";
import TelaInicial from "./components/TelaInicial.js";
import TelaDeSessões from "./components/TelaDeSessões.js";
import TelaDeAssentos from "./components/TelaDeAssentos.js";
import TelaDeSucesso from "./components/TelaDeSucesso.js";


export default function App() {

    return (
        <>
            <GlobalStyle />
            <NavBar />
        </>

    );
}

//<TelaInicial />
//<TelaDeSessões />
//<TelaDeAssentos />
//<TelaDeSucesso />