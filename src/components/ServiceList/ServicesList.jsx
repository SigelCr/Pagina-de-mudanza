/* eslint-disable react/prop-types */

import styled from "./ServicesList.module.css";
import ServiceCard from "./ServiceCard";

const ServicesList = ({ items }) => {
  //2el serviceList recibe la logica del servicelistcontainer y retorna el html de servicios y el mapeo
  //retornando hacia serviceCard

  return (
    <>
      <div className={styled.containerServiceFather}>
        <section>
          <div className={styled.containerService}>
            <h1>
              Con la asesoría de profesionales, los traslados son una tarea
              fácil.
            </h1>
            <p>
              <strong>
                Podemos asegurarte una mudanza organizada, segura y confiable
                gracias a nuestro compromiso y experiencia.
              </strong>
            </p>
            <p>
              En <strong>Fletes Matias</strong> nos dedicamos a brindar
              soluciones integrales para cada aspecto de una mudanza,
              asegurándonos de que nuestros clientes estén satisfechos con
              nuestro trabajo.
            </p>
            <p>
              Nos enfocamos en brindar una experiencia de mudanza sin
              preocupaciones y agradable para nuestros clientes, asegurándonos
              de que cada detalle sea atendido.
            </p>
          </div>
        </section>

        <section>
          <div className={styled.container2ImgService}>
            <div className={styled.blurBackground1}>
              <div className={styled.titleImg}>
                <p>Mudanzas</p>
                <h2>Residenciales</h2>
                <h5>Hogares - Apartamentos - Residencias</h5>
              </div>
            </div>
            <div className={styled.blurBackground2}>
              <div className={styled.titleImg}>
                <p>Mudanzas</p>
                <h2>Comerciales</h2>
                <h5>Oficinas - Tiendas - Negocios</h5>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styled.containerFatherServiceCard}>
            {items.map((item) => {
              return <ServiceCard item={item} key={item.id} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesList;
