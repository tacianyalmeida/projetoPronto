import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ControleLimpeza from "../Componentes/ControleDeLimpeza";
import Contato from "../Componentes/Contato";
import Login from "../Componentes/Login";
import Home from "../Componentes/Home";
import Planilha from "../Componentes/Planilha";
import Header from "./Header";
import Footer from "./Footer"


const App = () => {
    const [autenticado, setAutenticado] = useState(false);
    const [list, setLista] = useState([]);

    function salvaDados(dado) {
        let novaLista = [...list];
        novaLista.push(dado);
        setLista(novaLista);
    }

  
    const PrivateRoute = ({ verifica}) => {
        return autenticado ? verifica : <Navigate to="/" />;
    };

    return (
        <>
           <PrivateRoute verifica={<Header />}/>
            <Routes>
                <Route path="/" element={<Login onLoginSuccess={() => setAutenticado(true)} />} />
                <Route path="/home" element={<PrivateRoute verifica={<Home />} />} />                
                <Route path="/controleLimpeza" element={<ControleLimpeza saveDados={salvaDados} />} />
                <Route path="/planilha" element={<Planilha list={list} />} /> 
                <Route path="/contato" element={<Contato />}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <PrivateRoute verifica={<Footer />}/>
        </>
    );
};

export default App;