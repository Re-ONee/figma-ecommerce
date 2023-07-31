import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./AsgaardSofaSection.module.css";

type AsgaardSofaSectionType = {
  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
};

const AsgaardSofaSection: FunctionComponent<AsgaardSofaSectionType> = ({
  propBackgroundColor,
}) => {
  const rectangleDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} style={rectangleDivStyle} />
      <div className={styles.groupWrapper}>
        <div className={styles.lineParent}>
          <div className={styles.groupItem} />
          <div className={styles.asgaardSofa}>Asgaard sofa</div>
        </div>
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <img
          className={styles.dashiconsarrowUpAlt2}
          alt=""
          src="/dashiconsarrowdownalt2.svg"
        />
      </div>
      <div className={styles.shopParent}>
        <div className={styles.home}>Shop</div>
        <img
          className={styles.dashiconsarrowUpAlt2}
          alt=""
          src="/dashiconsarrowdownalt2.svg"
        />
      </div>
    </div>
  );
};

export default AsgaardSofaSection;
