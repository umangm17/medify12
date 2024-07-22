import React from "react";

import Herosection from "../herosection/herosection";
import Slider from "../Slilder/Slider";
import Specifications from "../Specifications/Specifications";

export default function Landingpage() {
  return (
    <div>
      <Herosection />
      <Slider />
      <Specifications />
    </div>
  );
}
