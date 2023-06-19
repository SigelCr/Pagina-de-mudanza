import React, { useState } from "react";
import styled from "./OurFleet.module.css";

const OurFleet = ({ items }) => {
  const [touchImg, setTouchImg] = useState(null);

  const handleClickImg = (item) => {
    setTouchImg(item);
  };

  const [clickButton, setClickButton] = useState(null);

  const clickLockMore = (item) => {
    setClickButton(item);
    console.log("anda");
  };

  return (
    <>
      <div className={styled.containerFatherOurFleet}>
        <h1 className={styled.h1}>
          Vehículos equipados y conducidos por profesionales
        </h1>
        <div className={styled.fatherMap}>
          {items.map((item) => {
            return (
              <div className={styled.containerImgFleet} key={item.id}>
                <div className={styled.imgFleet}>
                  <h1 style={{ margin: "5px" }}>{item.title}</h1>
                  <img
                    onMouseOver={() => handleClickImg(item)}
                    src={item == touchImg ? item.imgMirror : item.img}
                  />
                  <p style={{ margin: "5px" }}>{item.capacity}</p>
                  <button
                    className={styled.button}
                    onClick={() => clickLockMore(item)}
                  >
                    {item == clickButton ? item.detail : "Ver detalles"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurFleet;

{
  /* <div className={styled.imgFleet}>
            <img src="https://res.cloudinary.com/difrhbjlk/image/upload/v1685232494/279259100_3243066515980067_3203801809954723368_n.jpg_s9qssw.jpg" />
          </div>
          <div className={styled.imgFleet}>
            <img src="https://res.cloudinary.com/difrhbjlk/image/upload/v1685232782/137265286_2899474923672563_2638232436445263580_n.jpg_lpauli.jpg" />
          </div>
          <div className={styled.imgFleet}>
            <img src="https://res.cloudinary.com/difrhbjlk/image/upload/v1685296700/86499233_2613632278923497_1960291505608327168_n.jpg_ycplsz.jpg" />
          </div>
          <div className={styled.imgFleet}>
            <img src="https://res.cloudinary.com/difrhbjlk/image/upload/v1685297152/37313540_2169099196710143_153708495747678208_n.jpg_pxizbn.jpg" />
          </div>
        </section> */
}
