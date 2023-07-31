import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import CartSection from "../components/CartSection";
import PriceCard from "../components/PriceCard";
import HighQualitySection from "../components/HighQualitySection";
import LocationCard from "../components/LocationCard";
import styles from "./Cart.module.css";
const Cart: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/cart-sidebar");
  }, [navigate]);

  return (
    <div className={styles.cart}>
      <ContainerCardFormFilter
        imageDimensions="/mdiaccountalertoutline.svg"
        imageDimensionsText="/akariconssearch.svg"
        imageDimensionsCode="/akariconsheart.svg"
        imageCode="/antdesignshoppingcartoutlined.svg"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <CartSection buttonText="Cart" actionButtonText="Cart" />
      <PriceCard />
      <HighQualitySection
        imageDimensions="/trophy-1.svg"
        imageId="/guarantee.svg"
        imageCode="/shipping.svg"
        imageCodeUrl="/customersupport.svg"
        rectangleDiv={false}
      />
      <LocationCard propBottom="unset" propLeft="0px" propTop="1241px" />
    </div>
  );
};

export default Cart;
