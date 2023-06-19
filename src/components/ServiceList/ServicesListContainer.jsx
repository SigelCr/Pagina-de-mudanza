import React, { useEffect, useState } from "react";
import ServicesList from "./ServicesList";
import { services } from "../../productsMock";

const ServicesListContainer = () => {
  //1logica que pasa sus cosas al servicelist
  const [items, setItems] = useState([]);
  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      resolve(services);
    });
    task.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ServicesList items={items} />
    </div>
  );
};

export default ServicesListContainer;
