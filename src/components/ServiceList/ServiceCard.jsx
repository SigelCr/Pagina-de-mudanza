import React from "react";
import styled from "./ServicesList.module.css";

const ServiceCard = ({ item }) => {
  //3serviceCard recibe las props etc de serviceList y ya pinta la carta
  return (
    <div className={styled.containerCardService}>
      <h3 className={styled.titleCard}>{item.title}</h3>
      <img className={styled.imgCard} src={item.img} />
      <h4 className={styled.descriptionCard}>{item.description}</h4>
    </div>
  );
};

export default ServiceCard;
