import { FunctionComponent } from "react";
import styles from "./ShopSection.module.css";
const ShopSection: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.groupChild} alt="" src="/rectangle-1@2x.png" />
      <div className={styles.shopWrapper}>
        <div className={styles.shop}>Shop</div>
      </div>
      <div className={styles.homeParent}>
        <div className={styles.shop}>Home</div>
        <div className={styles.shop1}>Shop</div>
        <img
          className={styles.dashiconsarrowDownAlt2}
          alt=""
          src="/dashiconsarrowdownalt2.svg"
        />
      </div>
    </div>
  );
};

export default ShopSection;
