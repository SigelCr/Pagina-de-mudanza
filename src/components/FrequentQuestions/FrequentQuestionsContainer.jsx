import React, { useEffect, useState } from "react";
import { question } from "../../productsMock";
import FrequentQuestions from "./FrequentQuestions";

const FrequentQuestionsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      resolve(question);
    });
    task
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <FrequentQuestions items={items} />
    </div>
  );
};

export default FrequentQuestionsContainer;
