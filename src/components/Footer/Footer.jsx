import React from "react";
import styled from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <section className={styled.containerFooter}>
        <div>
          <img
            src="https://res.cloudinary.com/difrhbjlk/image/upload/v1685057295/logo_r8rgsp.jpg"
            alt=""
          />
        </div>
        <hr></hr>
        <div className={styled.us}>
          <Link to="/servicios">Servicios</Link>
          <Link to="/nuestraFlota">Nuestra Flota</Link>
          <Link to="/nosotros">¿Por qué elegirnos?</Link>
          <Link to="/preguntasFrecuentes">Preguntas frecuentes</Link>
        </div>
        <hr></hr>
        <div className={styled.reds}>
          <BsFacebook className={styled.facebook} />
          <BsInstagram className={styled.instagram} />
          <a
            href="https://wa.me/542323649699"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className={styled.whatsapp} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
