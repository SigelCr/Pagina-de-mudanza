import React from "react";
import styled from "./WhyChooseUs.module.css";

const WhyChooseUs = ({ items }) => {
  return (
    <>
      <div className={styled.containerWhyChooseUs}>
        <h1 className={styled.h1}>
          Tenemos lo necesario para que te quedes tranquilo y sin preocupaciones
          durante la mudanza
        </h1>
        <div className={styled.containerMap}>
          {items.map((item) => {
            return (
              <div className={styled.containerCardChoose} key={item.id}>
                <h1 className={styled.title}>{item.title}</h1>
                <h5 className={styled.description}>{item.description}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
/* className={styled.border} */
