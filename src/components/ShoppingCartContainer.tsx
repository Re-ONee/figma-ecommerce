import { FunctionComponent } from "react";
import CardContainer from "./CardContainer";
import styles from "./ShoppingCartContainer.module.css";
const ShoppingCartContainer: FunctionComponent = () => {
  return (
    <div className={styles.shoppingCartParent}>
      <div className={styles.shoppingCart}>Shopping Cart</div>
      <div className={styles.groupChild} />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <CardContainer
        productDimensions="/group-146@2x.png"
        productDescription="Asgaard sofa"
        price="Rs. 250,000.00"
      />
      <CardContainer
        productDimensions="/group-1461@2x.png"
        productDescription="Casaliving Wood"
        price="Rs. 270,000.00"
        propTop="229px"
        propWidth="136px"
      />
    </div>
  );
};

export default ShoppingCartContainer;
