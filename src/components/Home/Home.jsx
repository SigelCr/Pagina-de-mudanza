import React from "react";
import styled from "./Home.module.css";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";

const Home = () => {
  return (
    <div className={styled.containerBlurBackground}>
      <div className={styled.blurBackground}></div>
      <div className={styled.titleHome}>
        <h1>Mudanzas de hogares y compañías sin complicaciones</h1>
        <h2>Adaptadas a tus necesidades financieras.</h2>
        <hr></hr>
        <h5 className={styled.h5}>Consulta tu presupuesto sin compromiso</h5>
        <div className={styled.fatherWpp}>
          <a
            href="https://wa.me/542323649699"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className={styled.whatsapp} />
          </a>
          <a
            href="https://www.facebook.com/13matu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className={styled.facebook} />
          </a>
          <a
            href="https://wa.me/542323649699"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styled.parrafo}>contactanos</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
