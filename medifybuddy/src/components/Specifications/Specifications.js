import React from "react";
import Styles from "./Specifications.module.css";
import drugstore from "../../asset/Drugstore.png";
import primarycare from "../../asset/primary-care.png";
import cardiology from "../../asset/cardiology.png";
import mri from "../../asset/mri.png";
import bloodtest from "../../asset/blood-test.png";
import pischology from "../../asset/piscologist.png";
import lab from "../../asset/Hospital.png";
import xray from "../../asset/X-Ray.png";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function Specifications() {
  return (
    <div className={Styles.specBackground}>
      <h1>Find By Specifications</h1>
      <Card>
        <CardContent>
          <CardMedia>
            <img src={drugstore} alt="drugstore not found" />
          </CardMedia>
        </CardContent>
        <Typography>Dentistry</Typography>
      </Card>
    </div>
  );
}
