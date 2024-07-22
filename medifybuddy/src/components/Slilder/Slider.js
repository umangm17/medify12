import React from "react";
import image1 from "../../asset/Group 10.png";
import image2 from "../../asset/Group 11.png";
import image3 from "../../asset/Group 12.png";
import Styles from "./Slider.module.css";

export default function Slider() {
  return (
    <div>
      <div className={Styles.imageSlider}>
        <img src={image1} alt="image1  not found" />
        <img src={image2} alt="image2  not found" />
        <img src={image3} alt="image3 not found" />
      </div>
      <div className={Styles.dotslider}>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
  );
}
