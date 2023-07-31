import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PriceCard.module.css";
const PriceCard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupImageClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.rs25000000Parent}>
            <div className={styles.rs25000000}>Rs. 250,000.00</div>
            <div className={styles.asgaardSofa}>Asgaard sofa</div>
            <div className={styles.rs250000001}>Rs. 250,000.00</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.productParent}>
              <div className={styles.product}>Product</div>
              <div className={styles.price}>Price</div>
              <div className={styles.quantity}>Quantity</div>
              <div className={styles.subtotal}>Subtotal</div>
              <img
                className={styles.groupInner}
                alt=""
                src="/group-146@2x.png"
                onClick={onGroupImageClick}
              />
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.div}>1</div>
              </div>
              <img
                className={styles.antDesigndeleteFilledIcon}
                alt=""
                src="/antdesigndeletefilled.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild1} />
          <div className={styles.cartTotals}>Cart Totals</div>
          <div className={styles.subtotal1}>Subtotal</div>
          <div className={styles.total}>Total</div>
          <div className={styles.rs250000002}>Rs. 250,000.00</div>
          <div className={styles.rs250000003}>Rs. 250,000.00</div>
          <div
            className={styles.rectangleParent1}
            onClick={onGroupContainer5Click}
          >
            <div className={styles.groupChild2} />
            <div className={styles.checkOut}>Check Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
