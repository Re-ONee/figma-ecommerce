import { FunctionComponent } from "react";
import styles from "./FilterSection.module.css";
const FilterSection: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.filterParent}>
        <div className={styles.filter}>Filter</div>
        <img
          className={styles.systemUiconsfiltering}
          alt=""
          src="/systemuiconsfiltering.svg"
        />
      </div>
      <img className={styles.biviewListIcon} alt="" src="/biviewlist.svg" />
      <img
        className={styles.cigridBigRoundIcon}
        alt=""
        src="/cigridbiground.svg"
      />
      <div className={styles.lineParent}>
        <div className={styles.groupItem} />
        <div className={styles.showing116Of}>Showing 1–16 of 32 results</div>
      </div>
      <div className={styles.showParent}>
        <div className={styles.show}>Show</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.div}>16</div>
        </div>
      </div>
      <div className={styles.shortByParent}>
        <div className={styles.show}>Short by</div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.default}>Default</div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
