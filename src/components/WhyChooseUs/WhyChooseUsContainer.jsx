import React, { useEffect, useState } from "react";
import { otherService } from "../../productsMock";
import WhyChooseUs from "./WhyChooseUs";

const WhyChooseUsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      resolve(otherService);
    });
    task.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <WhyChooseUs items={items} />
    </div>
  );
};

export default WhyChooseUsContainer;
