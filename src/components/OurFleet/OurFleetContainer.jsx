import React, { useEffect, useState } from "react";
import OurFleet from "./OurFleet";
import { vehicles } from "../../productsMock";

const OurFleetContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      return resolve(vehicles);
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
      <OurFleet items={items} />
    </div>
  );
};

export default OurFleetContainer;
