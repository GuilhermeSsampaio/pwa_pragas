import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.svg'
import InstallButton from './InstallButton'
import InstallButtonIos from './InstallButtonIos'
import { SearchBar } from "./SearchBar.jsx";
import { SearchResultsList } from "./SearchResultsList.jsx";
import { isAndroid, isIOS, isDesktop } from 'react-device-detect'


export const HomePage = () => {
    //Importação das Imagens
    var LogoIF = require('../public/ifms-dr-marca-2015.png');
    var LogoEmbrapa = require('../public/logo-embrapa-400.png');
    var LogoIFEmbrapa = require('../public/logo-if-embrapa.png');
    var LogoCartilha = require('../public/logo-cartilha.svg');   
    var Adeney = require('../public/adeney.jpg');   

    const [results, setResults] = useState([]);
    
    const handleCloseResults = () => {
        setResults([]); // Limpa os resultados
    };

    return(
        <>
            <Head>
                <meta name="referrer" referrerPolicy="no-referrer" />
                <title>Manual Pragas</title>
            </Head>

            {/* Código Navbar Offcanvas */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                    <div className="d-flex align-items-center"> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                            <i className="fas fa-bars"></i>
                        </button>
                        {/* Logo Navbar */}
                        <Link className="navbar-brand" href="/home">
                            <Image src={Logo} width={350} height={54} alt="logo Embrapa com letras em azul com um simbolo verde, sendo que as letras em cima do simbolo são brancas"/>
                        </Link>
                    </div>
                    {/* Input Search para tela menor que 992px */}
                    <div className="search-container first-form-search p-1">
                        <div className="search-bar-container">
                            <SearchBar setResults={setResults} />
                            {results && results.length > 0 && <SearchResultsList results={results} handleCloseResults={handleCloseResults} />}
                        </div>
                    </div>

                    {/* Código dos Itens Exibidos no Navbar */}
                    <div className="offcanvas offcanvas-start text-bg-light" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <ul className="navbar-nav d-flex links-logo-ifembrapa flex-row mx-1">
                                {/* Logo IF / Embrapa Dentro do Menu */}
                                <li className="nav-item">
                                    <Link href="/home">
                                        <Image src={LogoIFEmbrapa} className='img-navbar-menu me-3' width="100%" height={46} alt="logo Embrapa com letras em azul com um simbolo verde, sendo que as letras em cima do simbolo são brancas" priority/>
                                    </Link>
                                </li>
                            </ul>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <hr className="featurette-divider"></hr>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 center-itens">
                                <li className="nav-item">
                                    <Link className="nav-link back-item-link" href="/sumario" aria-current="page">
                                        <span className="link-text">Sumário</span>
                                    </Link>     
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link back-item-link" href="/autores" aria-current="page">
                                        <span className="link-text">Autores</span>
                                    </Link>
                                </li>
                            </ul>
                            {/* Input Search para tela maior que 992px */}
                            <div id="searchForm" className="search-container">
                                <div className="d-flex position-relative p-1 search-bar-container">
                                    <SearchBar setResults={setResults} />
                                    {results && results.length > 0 && <SearchResultsList results={results}  handleCloseResults={handleCloseResults}/>}
                                </div>
                            </div>
                            <ul className="navbar-nav d-flex links-logo flex-row">
                                <li className="nav-item second-logo-inst">
                                    <Image src={LogoIF} className='logotipo' width={130} height={35} alt="Logotiopo do IFMS Campus Dourados" priority/>
                                </li>
                                <li className="nav-item second-logo-inst">
                                    <Image src={LogoEmbrapa} className='logotipo' width={70} height={48} alt="Logotiopo da Embrapa" priority/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Conteúdos da Página Principal */}
            <div className="px-4 py-5 text-center hero content-after-navbar">
                <div className='hero-text'>
                    <div className='messagem'>
                        <Image className="d-block mx-auto mb-2" src={LogoCartilha} alt="Logo da cartilha" width="100%" height="128"/>
                        <h1 className="display-5 fw-bold">Manual de Identificação de Insetos e outros Invertebrados da Cultura da Soja</h1>
                    </div>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">4<sup>a</sup> edição atualizada</p>
                        <div className="d-grid container-botoes">
                            <Link href="/sumario" type="button" className="btn">
                                Descubra mais sobre Pragas na Soja
                            </Link>
                            {/* <a id='btn-instalar' href="#" className='btn'>Instalar</a> */}
                            {isDesktop && <InstallButton />}
                            {isAndroid && <InstallButton />}
                            {isIOS && <InstallButtonIos />}
                        </div>
                    </div>
                </div>
            </div>

            <div className="apresentacao">
                <div className="titulo">
                    <p>Você sabia que boa parte das publicações das minibibliotecas da Embrapa estão disponíveis em formato digital? Conheça a quarta edição atualizada da publicação Manual de identificação de insetos e outros invertebrados da cultura da soja.</p>
                </div>
                <div className="texto-container">
                    <h1>Apresentação</h1>
                    <div className="texto">
                        <p>A identificação precisa de pragas é etapa crucial para o correto diagnóstico em campo, necessária para a tomada de decisão de manejo e escolha da melhor estratégia de controle quando necessário. Espécies semelhantes podem apresentar suscetibilidades diferentes a um mesmo inseticida, assim como comportamentos diferentes. Portanto, erros no reconhecimento da espécie podem levar a fracassos do manejo dessas pragas.</p>
                        <p>Sendo assim, este manual tem como objetivos facilitar e orientar na identificação rápida das espécies de invertebradospragas mais importantes encontradas na cultura da soja. A identificação da espécie, com o auxílio de imagens contidas nesta publicação, permite obter informações adicionais existentes sobre a praga além de orientação para o seu encaminhamento a um especialista para identificação definitiva.</p>
                        <p>Dessa forma, esta publicação é útil para agricultores, estudantes e profissionais que desenvolvem atividades relacionadas à cultura da soja, especialmente naquelas ligadas ao manejo integrado de pragas.</p>
                        <p>Nesta quarta edição, foram atualizadas informações referentes às pragas da soja, além de algumas fotos contidas no manual, visando sempre levar a melhor informação disponível ao campo.</p>
                    </div>
                    <div className="autor">
                        <Image src={Adeney} alt="Foto do Adeney" className='img' width="100%" height={100}/>
                        <p className="nome">Adeney de Freitas Bueno</p>
                        <p className="cargo">Chefe-Adjunto de Pesquisa e Desenvolvimento</p>
                        <p className="cargo">Embrapa Soja</p>
                    </div>
                </div>
            </div>
            
            {/* Código Footer Embrapa */}
            <footer>
                <div className="container container-footer">
                    <div className="title-footer">
                        <p>Embrapa Agropecuária Oeste</p>
                    </div>
                    <div className="description-footer">
                        <p>Rodovia BR 163, Km 253,6, Caixa Postal 449, CEP: 79804-970, Dourados, MS</p>
                        <p>Fone: + 55 (67) 3416-9700</p>
                    </div>
                </div>
            </footer>   
        </>
    );
};
