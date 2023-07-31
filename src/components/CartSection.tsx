import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./CartSection.module.css";

type CartSectionType = {
  buttonText?: string;
  actionButtonText?: string;

  /** Style props */
  propLeft?: Property.Left;
  propWidth?: Property.Width;
  propLeft1?: Property.Left;
  propWidth1?: Property.Width;
};

const CartSection: FunctionComponent<CartSectionType> = ({
  buttonText,
  actionButtonText,
  propLeft,
  propWidth,
  propLeft1,
  propWidth1,
}) => {
  const groupDiv8Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const meubelHouseLogos05IconStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const groupDiv9Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.rectangleParent}>
      <img className={styles.groupChild} alt="" src="/rectangle-1@2x.png" />
      <div className={styles.cartParent} style={groupDiv8Style}>
        <div className={styles.cart}>{buttonText}</div>
        <img
          className={styles.meubelHouseLogos05Icon}
          alt=""
          src="/meubel-house-logos051@2x.png"
          style={meubelHouseLogos05IconStyle}
        />
      </div>
      <div className={styles.homeParent} style={groupDiv9Style}>
        <div className={styles.home}>Home</div>
        <div className={styles.cart1}>{actionButtonText}</div>
        <img
          className={styles.dashiconsarrowDownAlt2}
          alt=""
          src="/dashiconsarrowdownalt2.svg"
        />
      </div>
    </div>
  );
};

export default CartSection;
