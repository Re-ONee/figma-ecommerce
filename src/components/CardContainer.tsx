import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./CardContainer.module.css";

type CardContainerType = {
  productDimensions?: string;
  productDescription?: string;
  price?: string;

  /** Style props */
  propTop?: Property.Top;
  propWidth?: Property.Width;
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  productDimensions,
  productDescription,
  price,
  propTop,
  propWidth,
}) => {
  const groupDiv6Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const groupDiv7Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.groupParent} style={groupDiv6Style}>
      <img className={styles.groupChild} alt="" src={productDimensions} />
      <div className={styles.asgaardSofaParent} style={groupDiv7Style}>
        <div className={styles.asgaardSofa}>{productDescription}</div>
        <div className={styles.parent}>
          <div className={styles.div}>1</div>
          <div className={styles.x}>X</div>
          <div className={styles.rs25000000}>{price}</div>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
    </div>
  );
};

export default CardContainer;
