import React from "react";
import styled from "./FrequentQuestions.module.css";

const FrequentQuestions = ({ items }) => {
  return (
    <>
      <div className={styled.containerMap}>
        <h1 className={styled.h1}>Preguntas frecuentes</h1>
        <h2 className={styled.h2}>
          ¡Algunas de las siguientes preguntas y respuestas te pueden ayudar
          para tu mudanza!
        </h2>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <p>
                <strong style={{ color: "red" }}>-Pregunta:</strong> {item.ask}
              </p>
              <p>
                <strong style={{ color: "green" }}>-Respuesta:</strong>{" "}
                {item.answer}
              </p>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FrequentQuestions;
