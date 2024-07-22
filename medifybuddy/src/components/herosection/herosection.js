import React from "react";
import Styles from "./herosection.module.css";
import heroimg from "../../asset/hero_image.png";
import Navbar from "../navbar/navbar";

function Herosection() {
  return (
    <div>
      <Navbar />
      <div className={Styles.heroDiv}>
        <div className={Styles.herotag}>
          <div>Skip the travel ! Find online </div>
          <div>Medical Center </div>
          <div>
            Connect instantly with a 24x7 specialist or choose to video a visit
            a particular doctor{" "}
          </div>

          <button>Find Center </button>
        </div>
        <img className={Styles.image} src={heroimg} alt=" not found" />
      </div>
    </div>
  );
}

export default Herosection;
