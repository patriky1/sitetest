import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./grid.css";
import ProjectsCarousel from "../carousel/projectCarousel";
import qrcode from "../imagens/qrcode.png";
import imgbar from "../imagens/habilidades_mobile.svg";
import bar1 from "../imagens/bar1.png";
import bar3 from "../imagens/bar2.png";

import RightContact from "./contact";
import data from "./data.json";
import styled from "styled-components";

function DeveloperName() {
  return (
    <>
      <div className="bg1">
        <h4 className="title">Patriky</h4>
        <h4 className="title1"> Brito</h4>
      </div>
    </>
  );
}
const DeveloperContactStyle = styled.p`
  position: absolute;
  color: #ffffff;
  text-align: left;
  font-size: 19px;
  font-style: normal;
  top: 60vh;
  z-index: 2;
  margin-block-start: 13%;
  margin-inline-start: 3%;

  @media screen and (max-width: 680px) {
    top: 65vh;
    font-size: 16px;
    font-style: normal;
  }
`;
function DeveloperContact() {
  const year = new Date().getFullYear();
  return (
    <>
      <DeveloperContactStyle>
        E patrikybrito@gmail.com <br></br> T +55 83 9697-9777 <br></br> ©{year}{" "}
      </DeveloperContactStyle>
    </>
  );
}

export default function App() {
  return (
    <div style={{ position: "relative" }}>
      <RightContact />
      <DeveloperContact />
      <section className="section-wrapper">
        <Carousel fade controls={false} interval={null}>
          <Carousel.Item>
            <div className="fist-item">
              <DeveloperName />
              <div className="retangle1"></div>
              <div className="container-principal">
                <Carousel.Caption>
                  <div className="captions">
                    <p className="title2">Desenvolvedor </p>
                    <p className="titlegreen">Front-end</p>
                  </div>
                </Carousel.Caption>
                <h1 className="titleprincipal">
                  Ajudando<br></br> Negócios e <br></br> Organizações a Crescer
                </h1>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="fist-item">
              <DeveloperName />
              <h3 className="sobre">Sobre mim</h3>
              <div className="about-wrapper">
                <h5 className="sobremim">{data.sobre}</h5>
                <div className="end-items">
                  <img
                    className="qrcode"
                    src={qrcode}
                    alt="qrcode"
                    width="3rem"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={null}>
            <div className=" fist-item">
              <h4 className="title">Patriky</h4>
              <h4 className="title1"> Brito</h4>
              <h1 className="informacoes">Habilidades Profissionais</h1>
              <div className="imgbar1">
                <img className="imgbar1" src={imgbar} alt="imgbar" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={null}>
            <div className=" fist-item">
              <div className="bg1">
                <h4 className="title">Patriky</h4>
                <h4 className="title1"> Brito</h4>
              </div>
              <h1 className="informacoes">Idiomas</h1>

              <div className="portugues">
                <h5> Português</h5>
              </div>
              <div className="bar1">
                <img src={bar1} className="bar1" alt="bar1" />
              </div>
              <div className="espanhol">
                <h5> Espanhol </h5>
              </div>
              <div className="bar2">
                <img className="bar2" src={bar1} alt="bar1" />
              </div>
              <div className="ingles">
                <h5> Inglês</h5>
              </div>
              <div className="bar3">
                <img className="bar3" src={bar3} alt="bar1" />
              </div>
              <div className="formacao">
                <h3> Formação Acadêmica</h3>
              </div>
              <div className="exp">
                <h5 className="exp">
                  Graduado em Redes de computadores pela Universidade Paulista
                  UNIP, Sousa-PB Técnico em Informática, Instituto Federal de
                  Ciências e Técnologia da Paraíba - IFPB. Ensino médio
                  Integrado ao Técnico em Informática -IFPB.
                </h5>
              </div>
              <div className="formacao1">
                <h3>Experiência profissional</h3>
              </div>
              <div className="exp1">
                <h5 className="exp1">
                  Especialista em análise de dados no Instituto Brasileiro de
                  Geografia e Estatistica - IBGE Desenvolvedor Front-end, LANE
                  ART DESIGN Docente em Programação de sistemas, E.N.E. Jose de
                  Paiva Gadelha
                </h5>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={null}>
            <div className=" fist-item">
              <div className="bg1">
                <h4 className="title">Patriky</h4>
                <h4 className="title1"> Brito</h4>
              </div>
              <div className="informacoes">
                <h3>Projetos</h3>
              </div>
              <div className="projects">
                <ProjectsCarousel />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}
