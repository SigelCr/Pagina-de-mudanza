import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "./Navbar.module.css";
import BurguerButton from "../BurguerButton/BurguerButton";
import { BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
  const [click, setClick] = useState(false);
  //cuando esta true lo pasa a false y viceversa
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className={styled.containerNavbar}>
        <div style={{ margin: "auto 0 auto 0" }}>
          <Link to="/" style={{ margin: "auto 0 auto 0" }}>
            <img
              src="https://res.cloudinary.com/difrhbjlk/image/upload/v1685057295/logo_r8rgsp.jpg"
              title="mega drive"
              alt="mega drive"
              className={styled.logotipo}
            />
          </Link>
        </div>
        <div
          className={`${styled.containerNavbarLink} ${
            click ? styled.navbarMobile : ""
          }`}
        >
          <Link to="/servicios">Servicios</Link>
          <Link to="/nuestraFlota">Nuestra Flota</Link>
          <Link to="/nosotros">¿Por qué elegirnos?</Link>
          <Link to="/preguntasFrecuentes">Preguntas</Link>
        </div>
        <div className={styled.burguer}>
          <BurguerButton click={click} handleClick={handleClick} />
        </div>
      </div>
      <div>
        <a
          href="https://wa.me/542323649699"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className={styled.whatsapp} />
        </a>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
