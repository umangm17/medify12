import React from "react";
import styles from "./navbar.module.css";
import Button from "../button/Button";
export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div>Logo</div>
      <div className={styles.leftPart}>
        <li>FindDoctors </li>
        <li>Hospitals</li>
        <li>Medicines</li>
        <li>Surgeries</li>
        <li>Software for Provider</li>
        <li>Facilities</li>
        <Button />
      </div>
    </div>
  );
}
