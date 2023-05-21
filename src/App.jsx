import React, { Fragment } from "react";
import api from "../api";
import "./App.css";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//estado
function App() {
    const [informacoes, setInformacoes] = React.useState({});
    const [curriculun, setCurriculun] = React.useState({});
    const [portfolio, setPortfolio] = React.useState([]);

    //funcao assincrona
    //informacoes 
    const fetchDados = async () => {
        try {
            const informacao = await api.get(`/informacoes/1`);
            setInformacoes({
                foto: informacao.data.foto,
                nome: informacao.data.nome,
                cargo: informacao.data.cargo
            });

                                                                 //filtragem
                                                      //parametro + atributo + condicao
            const experienciaAcademica = await api.get(`/experiencias?tipo=academico`);
            const experienciaProfissional = await api.get(`/experiencias?tipo=profissional`);

            setCurriculun({
                resumo: informacoes.data.resumo,
                experienciaAcademica: experienciaAcademica.data,
                experienciaProfissional: experienciaProfissional.data,
            })

            const portfolio = await api.get(`/portfolio`);
            setPortfolio(portfolio.data);

        } catch (error) {
            console.log('Erro ao buscar dados!', error);
        }
    };

    React.useEffect(() => {
        fetchDados();
    }, []);


    return (
    <>
        <BrowserRouter>
    <Header informacoes={informacoes}/>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="portfolio" element= {<Portfolio portfolio={portfolio} />}/>
                <Route path="contato" element= {<Contact/>} />
            </Routes>
        </BrowserRouter>
    <Footer/>
    </>
)
}

export default App;

