import { FunctionComponent } from "react";
import styles from "./ContainerWrapper.module.css";
const ContainerWrapper: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.div}>-</div>
      <div className={styles.div1}>+</div>
      <div className={styles.div2}>1</div>
    </div>
  );
};

export default ContainerWrapper;
