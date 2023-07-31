import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormContainer.module.css";
const FormContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className={styles.groupParent}>
      <div className={styles.notCoveredInWarrantyParent}>
        <div className={styles.notCoveredIn}>Not Covered in Warranty</div>
        <div className={styles.domesticWarranty}>Domestic Warranty</div>
        <div
          className={styles.theWarrantyDoes}
        >{`The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.`}</div>
        <div
          className={styles.theWarrantyDoes1}
        >{`The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.`}</div>
        <div className={styles.year}>1 Year</div>
        <div className={styles.months}>3 Months</div>
      </div>
      <div className={styles.rectangleParent} onClick={onGroupContainer1Click}>
        <div className={styles.groupChild} />
        <div className={styles.addToCart}>Add To Cart</div>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer2Click}>
        <div className={styles.groupChild} />
        <div className={styles.addToCart}>Add To Cart</div>
      </div>
    </div>
  );
};

export default FormContainer;
