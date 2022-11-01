import React from "react";
import styles from './loader.module.scss'
import { ThreeCircles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={styles.backdrop}>
      <ThreeCircles color="#0d47a1" className={styles.loader} />
    </div>
  )
}
