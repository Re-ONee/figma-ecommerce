import { FunctionComponent } from "react";
import styles from "./ProductComparisonSection.module.css";
const ProductComparisonSection: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.groupChild} alt="" src="/rectangle-1@2x.png" />
      <div className={styles.meubelHouseLogos05Parent}>
        <img
          className={styles.meubelHouseLogos05Icon}
          alt=""
          src="/meubel-house-logos052@2x.png"
        />
        <div className={styles.productComparison}>Product Comparison</div>
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <div className={styles.comparison}>Comparison</div>
        <img
          className={styles.dashiconsarrowDownAlt2}
          alt=""
          src="/dashiconsarrowdownalt2.svg"
        />
      </div>
    </div>
  );
};

export default ProductComparisonSection;
