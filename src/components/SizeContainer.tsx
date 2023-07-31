import { FunctionComponent } from "react";
import styles from "./SizeContainer.module.css";
const SizeContainer: FunctionComponent = () => {
  return (
    <div className={styles.sizeParent}>
      <div className={styles.size}>Size</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.l}>L</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.xl}>XL</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <div className={styles.xs}>XS</div>
      </div>
    </div>
  );
};

export default SizeContainer;
