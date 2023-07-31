import { FunctionComponent } from "react";
import styles from "./CategoryContainer.module.css";
const CategoryContainer: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.categoriesParent}>
        <div className={styles.categories}>Categories</div>
        <div className={styles.crafts}>Crafts</div>
        <div className={styles.design}>Design</div>
        <div className={styles.handmade}>Handmade</div>
        <div className={styles.interior}>Interior</div>
        <div className={styles.wood}>Wood</div>
        <div className={styles.div}>2</div>
        <div className={styles.div1}>8</div>
        <div className={styles.div2}>7</div>
        <div className={styles.div3}>1</div>
        <div className={styles.div4}>6</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <img
          className={styles.akarIconssearch}
          alt=""
          src="/akariconssearch6.svg"
        />
      </div>
    </div>
  );
};

export default CategoryContainer;
